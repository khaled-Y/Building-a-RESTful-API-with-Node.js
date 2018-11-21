const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        msg:"from GET"
    })
})
router.post("/",(req,res,next)=>{
    res.status(200).json({
        msg:"from POST"
    })
})
router.get("/:id",(req,res,next)=>{
    // const id =req.pa
    res.status(200).json({
        msg:req.params.id
    })
})
router.patch("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"from PATCH"
    })
})
router.delete("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"from DELETE"
    })
})
module.exports = {
    router
}
