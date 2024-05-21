import z from 'zod';
import { orderModel } from './order.Model';
import { Torder } from './order.Type';




export const createOrderValidator = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number()
});

