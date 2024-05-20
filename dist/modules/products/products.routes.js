"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const products_Controller_1 = require("./products.Controller");
const router = (0, express_1.Router)();
router.get("/", products_Controller_1.ProductsController.searchProducts); // search products
router.post("/", products_Controller_1.ProductsController.createProduct); // create product
router.get("/", products_Controller_1.ProductsController.getProducts); // get all products
router.get("/:productId", products_Controller_1.ProductsController.getProduct); // get product by id
router.put("/:productId", products_Controller_1.ProductsController.updateProduct); // update product
router.delete("/:productId", products_Controller_1.ProductsController.deleteProduct); // delete product
exports.ProductRoutes = router;
