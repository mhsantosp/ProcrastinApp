const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const uuid = require("uuid");
const uuidv4 = uuid.v4;

// env
require("dotenv").config();

const storage = new Storage({
  projectId: process.env.GCP_PROJECT,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY,
  },
});

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const bucket = storage.bucket(process.env.GCP_BUCKET);

module.exports = function (app) {
  app.post("/upload", multer.single("file"), (req, res) => {
    const newfilename = uuidv4() + " " + req.file.originalname;
    const blob = bucket.file(newfilename);
    const blobStream = blob.createReadStream();

    blobStream.on("error", (err) => console.log(err));
    blobStream.on("finish", () => {
      const publicUrl = `https://storage.googleapis.com/${process.env.GCP_BUCKET}/${blob.name}`;

      const imgDetails = JSON.parse(req.body.data);
      imgDetails.image = publicUrl;
      db.Image.create(imgDetails).then(() => res.json(imgDetails))
    });

    blobStream.end(req.file.buffer);
  });
};
