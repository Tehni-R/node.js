import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.mjs";


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Products",
        allowed_formats: ["jpg", "jpeg","png"],
        transfornation: [{width: 800, height: 600, crops: "limit"}],
    },
})

const upload = multer({ storage });

export default upload;