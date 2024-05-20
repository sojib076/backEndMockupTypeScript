import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.Routes";
// import { MovieRoutes } from "./modules/movies/movies.route";

const app = express();

//parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use("/api/products", ProductRoutes);

export default app;
