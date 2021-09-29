import express from "express";
const router = express.Router();
import productController from "../controllers/prodcutController.js"
router.get('/',productController.getAllProducts);
router.get('/:id',productController.getProduct);

export default router;