import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.Routes";
import { OrderRoutes } from "./modules/order/order.Routes";
// import { MovieRoutes } from "./modules/movies/movies.route";

const app = express();

//parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
});

export default app;
