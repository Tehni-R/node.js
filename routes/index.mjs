import express from "express"
import products from "./products.mjs"
import Users from "../Models/users.mjs"



const router = express.Router()


router.use("/products",products)
router.use ("/users", Users)



export default router
