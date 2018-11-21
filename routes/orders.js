const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        msg:"orders GET"
    })
})
router.post("/",(req,res,next)=>{
    res.status(200).json({
        msg:"orders POST"
    })
})
router.get("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:req.params.id
    })
})
router.patch("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"orders PATCH"
    })
})
router.delete("/:id",(req,res,next)=>{
    res.status(200).json({
        msg:"orders DELETE"
    })
})
module.exports = {
    router
}
