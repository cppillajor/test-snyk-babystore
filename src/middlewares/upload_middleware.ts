import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/");
  },
  filename: function (req: any, file: any, cb: any) {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    let day = currentDate.getDate().toString().padStart(2, "0");
    let hour = currentDate.getHours().toString().padStart(2, "0");
    let minute = currentDate.getMinutes().toString().padStart(2, "0");
    let second = currentDate.getSeconds().toString().padStart(2, "0");
    const nombre_imagen = `${year}_${month}_${day}_${hour}_${minute}_${second}_${file.originalname}`;
    cb(null, nombre_imagen);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
export const upload = multer({ storage: storage, fileFilter: fileFilter });
