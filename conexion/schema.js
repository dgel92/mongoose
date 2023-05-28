import mongoose, { mongo } from "mongoose";

const userCollection = "users";

const UserSchema = new mongoose.Schema({
    firstname: {type:String, required: true, max: 50},
    lastname: {type:String, required: true, max: 50},
    email:{type:String, required: true, max: 50},
    admin: {type:Boolean, default: false},
    age: {type: Number, required: true}
},
{timestamps: true}
);

export const UserModel = mongoose.model(userCollection, UserSchema)
