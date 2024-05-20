import { Tinventory, Tproduct, Tvariant } from "./products.Type";
import mongoose from "mongoose";

// Define the Variant sub-schema

const variantSchema = new mongoose.Schema<Tvariant>({
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
const inventorySchema = new mongoose.Schema<Tinventory>({
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
const productSchema = new mongoose.Schema<Tproduct>({
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

export const ProductModel = mongoose.model("Product", productSchema);
