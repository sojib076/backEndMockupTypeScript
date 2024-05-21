import { ProductModel } from "./products.Model";
import { Tproduct } from "./products.Type";

const createProduct = async (data: Tproduct) => {
  const result = await ProductModel.create(data);
  return result;
};

const getProducts = async (data: string) => {
  if (data) {
    // check if the search term is provided
    const regex = new RegExp(data, "i"); // i makes the search case-insensitive
    const result = await ProductModel.find({
      $or: [{ name: regex }, { description: regex }, { category: regex }], // check if the any have the search te
    });
    return result; // return the result that matches the search term
  }
  const result = await ProductModel.find(); // if no search term is provided, return all the products
  return result;
};
const getProduct = async (productId: string) => {
  const result = await ProductModel.findById(productId); // find the product by the id
  return result;
};
const updateProduct = async (productId: string, data: object) => {
  const result = await ProductModel.updateOne({ _id: productId }, data); // update the product by the id
  return result;
};

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId }); // delete the product by the id
  return result;
};

export const ProductsService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
