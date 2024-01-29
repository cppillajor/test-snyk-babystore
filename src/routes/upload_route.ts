import { Router } from "express";
import { authMiddleware } from "../middlewares/auth_middleware";
import { upload } from "../middlewares/upload_middleware";
import { uploadImage,downloadImage } from "../controllers/upload_controller";
const router = Router();
router.post('/upload',[authMiddleware,upload.array('images',5)],uploadImage);
router.get('/download/:imagename',[authMiddleware],downloadImage);
export default router;
