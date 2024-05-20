"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.inventorySchema = exports.variantSchema = void 0;
const zod_1 = require("zod");
exports.variantSchema = zod_1.z.object({
    type: zod_1.z.string(), // Maximum length of 50 characters
    value: zod_1.z.string() // Maximum length of 100 characters and disallowing spaces
});
exports.inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive(), // Positive integer
    inStock: zod_1.z.boolean()
});
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string().max(100),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(), // Positive number
    category: zod_1.z.string().max(50), // Maximum length of 50 characters
    tags: zod_1.z.array(zod_1.z.string().max(50)), // Maximum length of 50 characters for each tag
    variants: zod_1.z.array(exports.variantSchema),
    inventory: exports.inventorySchema
});
