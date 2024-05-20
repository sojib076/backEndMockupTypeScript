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
exports.orderService = void 0;
const products_Model_1 = require("../products/products.Model");
const order_Model_1 = require("./order.Model");
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const orderID = order.productId;
    const quantity = order === null || order === void 0 ? void 0 : order.quantity;
    const result = yield order_Model_1.orderModel.create(order);
    const product = yield products_Model_1.ProductModel.findOne({ _id: orderID });
    if (product && product.inventory.quantity >= quantity) {
        const newQuantity = product.inventory.quantity - quantity;
        yield products_Model_1.ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.quantity": newQuantity } });
        if (newQuantity <= 0) {
            yield products_Model_1.ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.inStock": false } });
        }
        return result;
    }
    else {
        throw new Error(" Your order quantity is more than the available quantity");
    }
});
const getOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_Model_1.orderModel.find({ email: email });
    return result;
});
exports.orderService = {
    createOrder,
    getOrder
};
