const express = require('express')
const router = express.Router()


router.get("/",async(req,res)=>{
    res.json({
        message : "This is to get users"
    })
})
router.get("/:id",async(req,res)=>{
    res.json({
        message : "This is to get users by id"
    })
})

router.put("/:id",async(req,res)=>{
    res.json({
        message : "This is to Update user by id"
    })
})
router.delete("/:id",async(req,res)=>{
    res.json({
        message : "This is to Delete user by id"
    })
})





module.exports = router;