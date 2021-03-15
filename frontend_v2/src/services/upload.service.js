import Axios from "axios";

class UploadServices {
  getImages() {
    //referencia donde esta ubicada la imagen
    return Axios.get("http://localhost:5000/download");
  }

  sendImages() {
    const file = new Blob([JSON.stringify({})], { type: "multipart/form-data" });
    const form = new FormData();
    console.log("form: ", form);
    console.log("FormData: ", FormData);

    console.log("form.append-1: ", form.append);
    form.append("file", file);
    console.log("form.append-2: ", form.append);

    return Axios.post("http://localhost:5000/imagen/upload", form);
  }
}

export default new UploadServices();
