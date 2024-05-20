
import mongoose from "mongoose"; 
import { Torder } from "./order.Type";

const orderSchema = new mongoose.Schema<Torder> ({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

export  const orderModel = mongoose.model("Order", orderSchema);
