import { Router } from "express";
import { ProductsController } from "./products.Controller";

const router = Router();
router.get("/", ProductsController.getProducts); // get all products

// router.get("/", ProductsController.searchProducts); // search products
router.post("/", ProductsController.createProduct); // create product

router.get("/:productId", ProductsController.getProduct); // get product by id
router.put("/:productId", ProductsController.updateProduct); // update product
router.delete("/:productId", ProductsController.deleteProduct); // delete product

export const ProductRoutes = router;
