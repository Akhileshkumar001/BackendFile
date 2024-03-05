const express=require('express')
const mongoose=require('mongoose')

const bodyParser=require('body-parser');
const { watchFile } = require('fs');
const app=express();
app.use(bodyParser.urlencoded({extended:false})) 
const user=mongoose.model('user',{
    FirstName:String,
    LastName:String,
    Class:Number
})
const Child=mongoose.model('Child',{
    firstname:String,
    LastName:String,
    class:Number
})
const student=mongoose.model('student',{
    firstname:String,
    lastname:String,
    class:Number,
    mareks:Number
})

// mongoose
//     .connect('mongodb+srv://admin:admin123@cluster0.gc8qmpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(()=>{
//         console.log('database connected sucessfully');
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
app.get('/chil',async(req,res)=>{
    try{
        const USER=await Child.find()
        res.json({
            data:USER
        })
    }catch(err){
        res.json({
            message:'somthing is error'
        })
    }
   

})
app.get('/user',async(req,res)=>{
    try{
        const USER=await user.find()
        res.json({
            data:USER
        })
    }catch(error){
        res.json({
            message:"somthins=g is errror"
        })
    }
})
app.post('/chil',async(req,res)=>{
    try{
        await Child.create({
            firstname:Abhi,
            LastName:KUmar,
            class:5
        })
        res.json({
            status:'SUCCESS'
        })
    }catch(error){
        res.status(500).json({
            status:"FAILED",
            message:"Somithg is error"
           
        })
    }
})
app.post('/user',async(req,res)=>{
    const{FirstName,LastName,ClassNumber}=req.body;
    try{
           await user.create ({
            FirstName,
            LastName,
            Class:ClassNumber
        })
        res.json({
           status:"SUCCESS"
        })

    }catch(err){
        res.status(500).json({
            message:"somthing is error",
            status:'FAILED'
        })
    }
})
app.get('/student',async(req,res)=>{
    
    try{
        const Student=await student.find()
        res.json({
            data:Student
        })
    }catch(error){
        res.json({
            message:"somthing is error"
        })
    }
})
app.patch('/user/:id',async(req,res)=>{
    const{FirstName,LastName,ClassNumber}=req.body;
    const{id}=req.params;
    try{
        await user.findByIdAndUpdate(id,{
            FirstName,
            LastName,
            Class:ClassNumber
        })
        res.json({
            Status:'sucesses'
        })
    }catch(err){
        console.log(err);
    }
})
app.delete('/user/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        await user.findByIdAndDelete(id)
        res.json({
            Status:'sucesses'
        })
    }catch(err){
        res.json({
            Status:"error"
        })
    }
})
app.listen(3000,()=>{
    mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.gc8qmpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('database connected sucessfully');
    })
    .catch((err)=>{
        console.log(err);
    })
})