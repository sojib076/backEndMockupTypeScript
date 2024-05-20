import { Router } from "express";
import { orderController } from "./order.Controller";
const router = Router();
router.get('/',orderController.getOrder )

router.post('/',orderController.createOrder )






 export const OrderRoutes = router;