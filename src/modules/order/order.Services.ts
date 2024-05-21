import { ProductModel } from "../products/products.Model";
import { orderModel } from "./order.Model";

const createOrder = async (order: any) => {
    const orderID = order.productId
    const quantity = order?.quantity;
    const result = await orderModel.create(order);
    const product = await ProductModel.findOne({ _id: orderID });
    if (!product) {
        throw new Error("Product not found, Please enter a valid product ID "); 
    }
    else if (product && product.inventory.quantity >= quantity){
        const newQuantity = product.inventory.quantity - quantity;
        await ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.quantity": newQuantity } });
       if (newQuantity <= 0) {
       await ProductModel.updateOne({ _id: orderID }, { $set: { "inventory.inStock": false } });
       }
       return result;
    }else{
        throw new Error("Insufficient quantity available in inventory");
    }

};

const getOrders = async (email:string) => {

    if (email) {
        const result = await orderModel.find({email});
        console.log(result);
        if (result.length === 0 ) {
         throw new Error("Order not found");
        } 
        return result;
    }
    const result = await orderModel.find({});
    return result;
};


export const orderService = {
    createOrder,
   
    getOrders
}