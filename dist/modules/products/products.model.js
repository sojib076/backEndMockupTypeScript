"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the Variant sub-schema
const variantSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
// Define the Inventory sub-schema
const inventorySchema = new mongoose_1.default.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
// Define the main Product schema
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [variantSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});
// Create the model
exports.ProductModel = mongoose_1.default.model("Product", productSchema);
