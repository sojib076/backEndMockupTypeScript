"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_Controller_1 = require("./order.Controller");
const router = (0, express_1.Router)();
router.post('/', order_Controller_1.orderController.createOrder);
router.get('/', order_Controller_1.orderController.getOrders);
exports.OrderRoutes = router;
