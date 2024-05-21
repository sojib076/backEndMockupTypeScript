"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.inventorySchema = exports.variantSchema = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().max(50),
    value: zod_1.z.string().max(100),
});
exports.variantSchema = variantSchema;
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive(), // Positive integer
    inStock: zod_1.z.boolean(),
});
exports.inventorySchema = inventorySchema;
const productSchema = zod_1.z.object({
    name: zod_1.z.string().max(100),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().max(50),
    tags: zod_1.z.array(zod_1.z.string().max(50)),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema,
});
exports.productSchema = productSchema;
