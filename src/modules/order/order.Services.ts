import { ProductModel } from "../products/products.Model";
import { orderModel } from "./order.Model";
import { Torder } from "./order.Type";

const createOrder = async (order: Torder) => {
  const orderID = order.productId; // get the product ID from the order

  const quantity = order.quantity; // get the quantity from the order

  const product = await ProductModel.findOne({ _id: orderID }); // find the product by the ID

  if (!product) {
    // this is work only if the product is not found and give the error message
    throw new Error("Please provide a valid product ID");
  } else if (product && product.inventory.quantity >= quantity) {
    // check if the quantity is available in the inventory
    const result = await orderModel.create(order); // create the order

    const newQuantity = product.inventory.quantity - quantity; // it calculate the new quantity

    await ProductModel.updateOne(
      { _id: orderID },
      { $set: { "inventory.quantity": newQuantity } }, // update the quantity in the inventory
    );

    if (newQuantity <= 0) {
      await ProductModel.updateOne(
        { _id: orderID },
        { $set: { "inventory.inStock": false } },
      );
    } // if the quantity is less than 0 then it will update the inStock to false

    return result; // return the result
  } else {
    throw new Error("Insufficient quantity available in inventory");
  } // if the the requested quantity is not available gives error message
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
