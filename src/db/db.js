import mongoose from "mongoose";

const connectionString='mongodb+srv://admin:<admin>admin>@cluster0.vcskbbl.mongodb.net/coderhouse?retryWrites=true&w=majority';

    try {
        await mongoose.connect(connectionString)
        console.log("base conectada correctamente");
    } catch (error) {
        console.log(error);    
    }