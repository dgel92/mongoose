import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB{

async getUserByName(name){
    try {
        const response = await UserModel.find({first_name: name}).explain()
        return response.executionStats;        
    } catch (error) {
        console.log(error);
    }
}

async getUserById(id){
    try {
        const response= await UserModel.findById(id).explain();
        return response.populate("pets");
    } catch (error) {
        console.log(error); 
    }
}


async getUserByEmail(email){
    try {
        const response = await UserModel.find({ email: email});
        return response;        
    } catch (error) {
        console.log(error);
    }
}

async getAllUser(){
    try {
        const response = await UserModel.find({});
        return response;
    } catch (error) {
        console.log(error);
    }
}

async createUser(obj){
    try {
        const response = await UserModel.create(obj);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async updateUser(id, obj){
    try {
        await UserModel.updateUser({_id: id}, obj)
        return obj;
    } catch (error) {
        console.log(error);
    }
}

async deleteUser(id) {
    try {
        const response = await UserModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
    console.log(error);
    }
}

async aggregation1(gender){
    try {
        const res = await UserModel.aggregate([
            {
                $match: {gender: `${gender}`}
            }
        ])
        return res;
    } catch (error) {
        console.log(error);
    }
}

async updateManyUsers(){
    try {
        const user = await UserModel.find({})
        getAllUsers.forEach((user)=>{
            user.age = getRandomNumber()
            user.date = getRandomDate()
            user.save()
        })
        return {message:"updated ok"}
    } catch (error) {
        console.log(error);
    }
}

}