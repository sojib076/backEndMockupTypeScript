import { ProductModel } from "./products.Model";

const createProduct = async (data: object) => {
  const result = await ProductModel.create(data);
  return result;
};

const getProducts = async () => {
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
const searchProducts = async (query: any) => {
  const regex = new RegExp(query.searchTerm, "i");
  const result = await ProductModel.find({
    $or: [{ name: regex }, { description: regex }],
  });
  return result;
};

export const ProductsService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
