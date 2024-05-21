import { Request, Response } from "express";
import { ProductsService } from "./products.Services";
import { productSchema } from "./products.Validator";

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const validatedProduct = productSchema.parse(data);

    const result = await ProductsService.createProduct(validatedProduct);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: [result],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Products Not Added!",
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  const search = req.query.searchTerm as string;

  try {
    const result = await ProductsService.getProducts(search);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Products Not Found!",
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  try {
    const result = await ProductsService.getProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const data = req.body;
  const validatedProduct = productSchema.parse(data);
  try {
    await ProductsService.updateProduct(productId, validatedProduct);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product Not Updated !",
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    await ProductsService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product Not Found!",
    });
  }
};

// const searchProducts = async (req: Request, res: Response) => {

//   try {
//     const result = await ProductsService.searchProducts(search);
//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Products Not Found!",
//     });
//   }
// };

export const ProductsController = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
