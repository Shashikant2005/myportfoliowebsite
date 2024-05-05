import mongoose from "mongoose"

let user = new mongoose.Schema({
    username:{
        type:String
    },
   
    email:{
        type:String
    },

    message:{
        type:String
    }
})

const UserSchema=mongoose.model("clients",user)  // here "UserSchema" is our collection which we are exporting

export default UserSchema