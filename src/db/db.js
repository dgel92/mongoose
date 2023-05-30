import mongoose from "mongoose";

const connectionString='mongodb+srv://admin:admin@cluster0.vcskbbl.mongodb.net/?retryWrites=true&w=majoritymongodb://localhost:27017/dbCoder';

    try {
        await mongoose.connect(connectionString)
        console.log("base conectada correctamente");
    } catch (error) {
        console.log(error);    
    }