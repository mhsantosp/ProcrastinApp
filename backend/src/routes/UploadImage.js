import {Router} from 'express';
import multer from 'multer';

const router = Router();
const Image = require("../models/Image");
const storage = require("../multer");

const uploader = multer({ storage });

router.post("/upload", uploader.single("file"), async (req, res) => {
  const { file, body } = req;

  if (file && body) {
    const newImage = new Image({
      filName: body.name,
      urlFile: `http://localhost:5000/imagen/${file.filName}`,
    });

    await newImage.save();

    res.json({
      newImage: newImage,
    });
  } else {
    console.log('Error')
  }
});

router.get("/download", async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

export default router;