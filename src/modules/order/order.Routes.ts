import { Router } from "express";
import { orderController } from "./order.Controller";
const router = Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);

export const OrderRoutes = router;
