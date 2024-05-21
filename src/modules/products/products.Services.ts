import { ProductModel } from "./products.Model";
import { Tproduct } from "./products.Type";

const createProduct = async (data: Tproduct) => {
  const result = await ProductModel.create(data);
  return result;
};

const getProducts = async (data: string) => {
  if (data) {
    const regex = new RegExp(data, "i");
    const result = await ProductModel.find({
      $or: [{ name: regex }, { description: regex }, { category: regex }],
    });
    return result;
  }
  const result = await ProductModel.find();
  return result;
};
const getProduct = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};
const updateProduct = async (productId: string, data: object) => {
  const result = await ProductModel.updateOne({ _id: productId }, data);
  return result;
};

const deleteProduct = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};

export const ProductsService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
