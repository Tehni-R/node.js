import express from "express";
import Users from "../Models/users.mjs"

 router.get("/",async(req,res)=>{
    const users = await Users.find()
    res.send({Message: 'Data Fetched Successfully' , Data:users})
 })

 router.post("/register" , async (req,res) =>{
    try{
        const user = new Users(req.body);
        await user.save()
        res.send({message:"User registered successfully!" })
    }

    catch (e){
        res.send({message: e.message})
    }
 })

//Step 1: Check if email exists
 router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await Users.findOne({email})

    if(!user){
        req.send({message:"User not found"})
        return
    }    
   
//Step 2: Compare the passwords
    const isCorrect=user.comparePassword(password)

    if(!isCorrect){
        res.send({message:'User Not Found'})
        return
    }

//Step 3: Generate Token
    const token = user.generateToken()
    user.tokens.push(token)
    await user.save()

    res.send({message: 'User logged in successfully!',token})

    }

    catch(e){
        res.status(404).send({message:e.message})
    }
 })

router.put('/logout',verifyToken,async(req,res)=>{
    await Users.findByIdAndUpdate(req.userId, 
    { $pull: { tokens: req.tokenToRemove } })
    res.send({message:'Logged Out Successfully'})
})

export default router
