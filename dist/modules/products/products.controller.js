"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const products_Services_1 = require("./products.Services");
const products_Validator_1 = require("./products.Validator");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const validatedProduct = products_Validator_1.productSchema.parse(data);
        const result = yield products_Services_1.ProductsService.createProduct(validatedProduct);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: [result],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Products Not Added!",
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.searchTerm;
    try {
        const result = yield products_Services_1.ProductsService.getProducts(search);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Products Not Found!",
        });
    }
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield products_Services_1.ProductsService.getProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product Not Found!",
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const data = req.body;
    const validatedProduct = products_Validator_1.productSchema.parse(data);
    try {
        yield products_Services_1.ProductsService.updateProduct(productId, validatedProduct);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: data,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product Not Updated !",
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        yield products_Services_1.ProductsService.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product Not Found!",
        });
    }
});
// const searchProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductsService.searchProducts(search);
//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Products Not Found!",
//     });
//   }
// };
exports.ProductsController = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
