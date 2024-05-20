"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_Routes_1 = require("./modules/products/products.Routes");
const order_Routes_1 = require("./modules/order/order.Routes");
// import { MovieRoutes } from "./modules/movies/movies.route";
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Next!");
});
app.use("/api/products", products_Routes_1.ProductRoutes);
app.use("/api/orders", order_Routes_1.OrderRoutes);
exports.default = app;
