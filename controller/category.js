import Category from "../models/category"
import Product from "../models/Product";
export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}
export const read = async ( req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}
export const list = async ( req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
    } catch (error) {
        
    }
}