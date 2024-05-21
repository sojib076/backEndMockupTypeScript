import { ProductModel } from "../products/products.Model";
import { orderModel } from "./order.Model";
import { Torder } from "./order.Type";

const createOrder = async (order: Torder) => {

  const orderID = order.productId;     // get the product ID from the order 

  const quantity = order.quantity;   // get the quantity from the order

  const product = await ProductModel.findOne({ _id: orderID }); // find the product by the ID

  if (!product) {
    throw new Error("Please provide a valid product ID");
  } else if (product && product.inventory.quantity >= quantity) {

    const result = await orderModel.create(order);  // create the order

    const newQuantity = product.inventory.quantity - quantity;

    await ProductModel.updateOne(
      { _id: orderID },
      { $set: { "inventory.quantity": newQuantity } },
    );

    if (newQuantity <= 0) {
      await ProductModel.updateOne(
        { _id: orderID },
        { $set: { "inventory.inStock": false } },
      );
    }

    return result;
  } else {
    throw new Error("Insufficient quantity available in inventory");
  }
};

const getOrders = async (email: string) => {
  if (email) {
    const result = await orderModel.find({ email });
    if (result.length === 0) {
      throw new Error("Order not found");
    }
    return result;
  }
  const result = await orderModel.find({});
  return result;
};

export const orderService = {
  createOrder,
  getOrders,
};
