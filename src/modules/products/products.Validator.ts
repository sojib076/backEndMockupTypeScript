import { z } from "zod";

const variantSchema = z.object({
  type: z.string().max(50), 
  value: z.string().max(100) 
});
const inventorySchema = z.object({
  quantity: z.number().int().positive(), // Positive integer
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().max(100),
  description: z.string(),
  price: z.number().positive(), 
  category: z.string().max(50), 
  tags: z.array(z.string().max(50)), 
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});
export { variantSchema, inventorySchema, productSchema };