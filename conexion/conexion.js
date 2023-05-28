import mongoose from "mongoose";

const connectionString="mongodb://localhost:27017/dbCoder";

export const initMongoDB= async() =>{

    try {
        await mongoose.connect(connectionString)
        console.log("base conectada correctamente");
    } catch (error) {
        console.log(error);    
    }
}

export const disconnectMongoDB=async()=>{
    try {
        await mongoose.disconnect();
        console.log("desconectado de la base");
    } catch (error) {
        console.log(error);
    }
}


