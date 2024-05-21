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
    const orderID = order.productId; // get the product ID from the order
    const quantity = order.quantity; // get the quantity from the order
    const product = yield products_Model_1.ProductModel.findOne({ _id: orderID }); // find the product by the ID
    if (!product) {
        // this is work only if the product is not found and give the error message
        throw new Error("Please provide a valid product ID");
    }
    else if (product && product.inventory.quantity >= quantity) {
        // check if the quantity is available in the inventory
        const result = yield order_Model_1.orderModel.create(order); // create the order
        const newQuantity = product.inventory.quantity - quantity; // it calculate the new quantity
        yield products_Model_1.ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.quantity": newQuantity } });
        if (newQuantity <= 0) {
            yield products_Model_1.ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.inStock": false } });
        } // if the quantity is less than 0 then it will update the inStock to false
        return result; // return the result
    }
    else {
        throw new Error("Insufficient quantity available in inventory");
    } // if the the requested quantity is not available gives error message
});
const getOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield order_Model_1.orderModel.find({ email });
        if (result.length === 0) {
            throw new Error("Order not found");
        }
        return result;
    }
    const result = yield order_Model_1.orderModel.find({});
    return result;
});
exports.orderService = {
    createOrder,
    getOrders,
};
