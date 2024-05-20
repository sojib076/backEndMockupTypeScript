import { z } from "zod";
export const variantSchema = z.object({
    type: z.string() , // Maximum length of 50 characters
    value: z.string() // Maximum length of 100 characters and disallowing spaces
  });
  
  export const inventorySchema = z.object({
    quantity: z.number().int().positive(), // Positive integer
    inStock: z.boolean()
  });
  
  export const productSchema = z.object({
    name: z.string().max(100) ,
    description: z.string(),
    price: z.number().positive(), // Positive number
    category: z.string().max(50), // Maximum length of 50 characters
    tags: z.array(z.string().max(50)), // Maximum length of 50 characters for each tag
    variants: z.array(variantSchema),
    inventory: inventorySchema
  });