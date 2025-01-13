const express = require('express')
const router = express.Router()


router.post("/message",async(req,res)=>{
    res.json({
        message : "This is to send message"
    })
})

router.get("/:conversationId",async(req,res)=>{
    res.json({
        message : "This is to  retrive chat history"
    })
})

router.post("/file",async(req,res)=>{
    res.json({
        message : "This is to  handle file uploads"
    })
})


module.exports = router;