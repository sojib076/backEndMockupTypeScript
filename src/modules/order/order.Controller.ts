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
            "message": e.message,
            
        });
    }
}

const getOrders = async (req: Request, res: Response) => {

    try {
        const result = await orderService.getOrders(req.query.email as string);
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully!",
            data: result,
        })
    }
    catch (e) {
        res.status(400).json({
            "success": false,
            "message": "Order not found",
        });
    }

}

export const orderController = {
    createOrder,
    getOrders
}