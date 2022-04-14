import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unque:true
    },
    img: {
        type:String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    

    category: {
        type: ObjectId,
        ref: "category"
    }

}, { timestamps: true });
export default mongoose.model('product', productSchema)