import { orderService } from "./order.Services";
import { Request, Response } from "express";

const createOrder = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const result = await orderService.createOrder(data);
        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            data: result,
        })
    }
    catch (e: any) {
        res.status(400).json({
            "success": false,
            "message": "Order creation failed!",
            error: e.message,
        });
    }
}
const getOrder = async (req: Request, res: Response) => {
    // get by email 
    const queryEmail = req.query.email as string;
    try {
        const result = await orderService.getOrder(queryEmail);
        res.status(200).json({
            "success": true,
            "message": "Order fetched successfully!",
            data: result,
        })
    }
    catch (e: any) {
        res.status(400).json({
            "success": false,
            "message": "Order fetch failed!",
            error: e.message,
        });
    }
}


export const orderController = {
    createOrder,
    getOrder
}