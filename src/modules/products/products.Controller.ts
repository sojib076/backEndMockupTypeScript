import { Request, Response } from "express";
import { ProductsService } from "./products.Services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await ProductsService.createProduct(data);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: [result],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Products Not Added!",
      error: err.message,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductsService.getProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Products Not Found!",
      error: err.message,
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product Not Found!",
      error: err.message,
    });
  }
};


const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const data = req.body;
  try {
     await ProductsService.updateProduct(productId, data);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product Not Found!",
      error: err.message,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result = await ProductsService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product Not Found!",
      error: err.message,
    });
  }
};
const searchProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query;

  try {
    const result = await ProductsService.searchProducts(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Products Not Found!",
      error: err.message,
    });
  }
};

export const ProductsController = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
