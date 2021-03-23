import Axios from "axios";

class UploadServices {
  getImages() {
    //referencia donde esta ubicada la imagen
    return Axios.get("http://localhost:4000/download");
  }

  sendImages(file) {
    // const file = new Blob([JSON.stringify({})], { type: "multipart/form-data" });
    const formData = new FormData();
    console.log("formData: ", formData);
    console.log("FormData: ", FormData);

    console.log("form.append-1: ", formData.append);
    formData.append("file", file);
    console.log("form.append-2: ", formData.append);

    return Axios.post("http://localhost:5000/imagen/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  }
}

export default new UploadServices();
