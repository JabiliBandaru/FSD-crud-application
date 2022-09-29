const express=require('express')
const router=express.Router()
const book1=require('../models/book')
router.get('/:id',async(req,res)=>
{
    try{
        const b1=await book1.findById(req.params.id)
        res.json(b1)
    }catch(err)
    {
        res.send('error'+err)
    }
})
router.post('/',async(req,res)=>
{
    const b2=new book1({
        title:req.body.title,
        author:req.body.author,
        purchased:req.body.purchased
    })
    try{
        const b3=await b2.save()
        res.json(b3)
    }catch(err){
        res.send('error'+err)
    }
})
router.patch('/:id',async(req,res)=>
{
   
    try{
        const b4=await book1.findById(req.params.id)
        b4.purchased=req.body.purchased
        const a1=await b4.save()
        res.json(a1)
    }catch(err){
        res.send('error'+err)
    }
})
module.exports=router