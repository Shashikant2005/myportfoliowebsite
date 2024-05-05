import express from "express";
import db_connect from "./portdb.js";
import UserSchema from "./portmodel.js";

let app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
db_connect()

app.post("/portfolio" , async (req,res)=>{

    let name= req.body.name;
    let email= req.body.email;
    let message= req.body.message;

    let createduser= await  UserSchema.create({username:name,email:email,message:message})
   
    // console.log("user creatd succesfully");
   res.
    res.send("message send succsefully")
   
   })


app.listen(8000,()=>{
    console.log("server is runnnig");
})