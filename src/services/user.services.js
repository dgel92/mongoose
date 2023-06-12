import UserDaoMongoDB from "../daos/mongoDb/usar.dao.js";
import { __dirname } from './../path.js';
import fs from "fs";

const userDao = new UserDaoMongoDB();


const userFile = JSON.parse(fs.readFileSync(__dirname + "/data/Users.json", "utf-8"));

export const createFileUser = async () => {
    try {
        const newUser = await userDao.createUser(usersFile);
        console.log('¡Users saved!');
        if (!newUser) throw new Error("Validation Error!");
        else return { message: 'Users saved!' };
        } catch (error) {
        console.log(error);
        }
    };


export const getByNameUser = async (name) =>{
    try {
        const item = await userDao.getUserByName(name);
        if(!item)throw new Error("usuario no encontrado");
        else return item;
    } catch (error) {
        console.log(error);
    }
}

export const getByEmailUser = async (email) =>{
    try {
        const item = await userDao.getUserByEmail(email);
        if(!item) throw new Error("usuario no encontrado");
        else return item;
    } catch (error) {
        console.log(error);
    }
}




export const getByIdUser= async(id)=>{
    try {
        const item = await userDao.getUserById(id);
        if(!item) throw new Error("User not found!");
        else return
    } catch (error) {
        console.log(error);;
    }
}

export const getUserByName= async(name)=>{
    try {
        const item = await userDao.getUserByName(name);
        if(!item) throw new Error("User not found!");
        else return
    } catch (error) {
        console.log(error);;
    }
}

export const getAllUsers = async (page, limit) => {
    try {
        const item = await userDao.getAllUsers(page, limit);
        if(!item) throw new Error("user not found");
        else return item;        
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (obj) =>{
    try {
        const newUser = await userDao.createUser(obj);
        if(!newUser) throw new Error("validacion erronea");
        else return newUser;
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (id, obj)=>{
    try {
        let item = await userDao.getUserById(id);
        if (!item){
            throw new Error("user not found")
        }else{
            const userUpdated = await userDao.updateUser(id, obj);
            return userUpdated
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        const userDeleted = await userDao.deleteUser(id);
        return userDeleted;
    } catch (error) {
        console.log(error);
    }
};

export const aggregation1 = async(gender)=>{
    try {
        const aggregation = await userDao.aggregation1()
        return aggregation;
    } catch (error) {
        console.log(error);
    }
}

export const updateManyUsers = async() =>{
    try {
        const response = await userDao.updateManyUsers();
        return response
    } catch (error) {
        console.log(error);
    }
}