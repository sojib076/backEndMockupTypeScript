import { ProductModel } from "../products/products.Model";
import { orderModel } from "./order.Model";

const createOrder = async (order: any) => {
    const orderID = order.productId
    const quantity = order?.quantity;
    const result = await orderModel.create(order);

    const product = await ProductModel.findOne({ _id: orderID });

    if (product && product.inventory.quantity >= quantity) {
        const newQuantity = product.inventory.quantity - quantity;
         await ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.quantity": newQuantity } });
        if (newQuantity <= 0) {
        await ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.inStock": false } });
        }
        return result;
    }
    else {
        throw new Error(" Your order quantity is more than the available quantity");
    }

};
const getOrder = async (email: string) => {
    const result = await orderModel.find({ email: email });
    return result;
};

export const orderService = {
    createOrder,
    getOrder
}