import mongoose from "mongoose";
let mongourl="mongodb://127.0.0.1:27017/portfolio"

async function db_connect(){

    try {

     await  mongoose.connect(mongourl)

     console.log("database connection succesfull");

    } catch (error) {
        
        console.log(`database connection fail ${error}`);
    }
}

export default db_connect


