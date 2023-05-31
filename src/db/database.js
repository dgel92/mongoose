import mongoose from "mongoose";

const connectionString='mongodb+srv://admin:GTvQBmxUU3aJNKQz@cluster0.vcskbbl.mongodb.net/newdb?retryWrites=true&w=majority';

    try {
        await mongoose.connect(connectionString)
        console.log("base conectada correctamente");
    } catch (error) {
        console.log(error);    
    }