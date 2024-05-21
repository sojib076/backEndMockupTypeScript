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
exports.ProductsService = void 0;
const products_Model_1 = require("./products.Model");
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_Model_1.ProductModel.create(data);
    return result;
});
const getProducts = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data) {
        // check if the search term is provided
        const regex = new RegExp(data, "i"); // i makes the search case-insensitive
        const result = yield products_Model_1.ProductModel.find({
            $or: [{ name: regex }, { description: regex }, { category: regex }], // check if the any have the search te
        });
        return result; // return the result that matches the search term
    }
    const result = yield products_Model_1.ProductModel.find(); // if no search term is provided, return all the products
    return result;
});
const getProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_Model_1.ProductModel.findById(productId); // find the product by the id
    return result;
});
const updateProduct = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_Model_1.ProductModel.updateOne({ _id: productId }, data); // update the product by the id
    return result;
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_Model_1.ProductModel.deleteOne({ _id: productId }); // delete the product by the id
    return result;
});
exports.ProductsService = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
