// import express from "express"
// import Product from "../Models/Product.mjs";



// const router = express.Router()
// router.get ('/',async (req, res)=>{
//     const Product=await Product.find()
//     res.send({message: "Product fetched sucessfully" , data: Product})
// })

// router.get("/:id", async (req, res)=>{
//     const Product = await Product.findById({ _id: req.params.id })
//     if(!Product) return res.statusCode(404).send({message:"Product not found"})
//     res.send({message: "Product fetched sucessfully" , data: Product})
//  })

// router.post('/post', async (req, res)=>{
//     try {
//         const Product = new Product(req.body)
//         await Product.save()
//         console.log(req.body)
//         res.send({ message: "ad posted successfully"})
//     } catch (e){
//         res.send({ message: e.message});
//     }
// })

// router.put("/:id" , async (req, res)=>{
//     try {
//         const Product = await Product.findOneAndUpdate(
//             {_id: req.params.id}, req.body,
//             {new: true});
//            res.send({message: "Product update sucessfully" , updateProduct});
//      } catch (e){
//         res.send({ message: "Error updating product" , error: e.message});
//     }
// })

// router.delete("/:id", async (req,res)=>{
//     try{
//         const Product = await Product.deleteOne(
//             {_id:params.id},req.body,
//             {new: true});
//             res.send({message: "Product deleted successfully",  deletedProduct});   
//     }
//       catch(e){
//         res.send({message: "Error deleting product", error: e.message});
//     }
// })




// export default router;

import express from 'express';
import product from "../Models/Product.mjs";


const router = express.Router();
router.get('/',async(req , res)=>{
    const Products = await product.find();
    res.send({message:"Products fetched successfully", data: Products});
})


router.get('/:id', async(req ,res)=>{
    const Product = await product.findById({_id: req.params.id});
    if(!Product) return res.status(404).send({message:"Product not found"});
    res.send({message:"Product fetched successfully", data: Product});
})


router.post('/', async(req, res) => {
    try{
        const newProduct = new product(req.body);
        await newProduct.save();
        console.log(req.body);
        res.send({message: "Product created successfully"});
    }
    catch(e){
        res.send({ message: e.message});
}
})


router.put('/:id', async(req, res) => {
    try{
        const updatedProduct = await product.findOneAndUpdate(
            {_id: req.params.id}, req.body,
            {new: true});
        res.send({message: "Product updated successfully",  updatedProduct});
    }
    catch(e){
        res.send({message: "Error updating product", error: e.message});
    }
})


router.delete('/:id', async(req, res) => {
    try{
        const deletedProduct = await product.deleteOne(
            {_id: req.params.id},req.body, 
            {new: true});
        res.send({message: "Product deleted successfully",  deletedProduct});
    }
    catch(e){
        res.send({message: "Error deleting product", error: e.message});
    }
})


export default router;