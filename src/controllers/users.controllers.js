import * as service from "../services/user.services.js";

export const createFileCtr = async (req, res, next) =>{
    try {
        const newUsers = await service.createFileUser();
        if(!newUsers) throw new Error("validacion erronea");
        else res.json(newUsers);
    } catch (error) {
        next(error);
    }
}

export const getByIdCtr = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const item = await service.getByIdUser(id);
        if(!item) throw new Error("usuario no encontrado");
        res.json(item)
    } catch (error) {
        next(error);
    }
}

export const getByNameCtr = async (req, res, next) => {
    try {
        const { name } = req.query;
        const item = await service.getByNameUser(name);
        if (!item) throw new Error("User not found!");
    
        res.json(item);
        } catch (error) {
        next(error);
        }
    };
    
    export const getByEmailCtr = async (req, res, next) => {
        try {
        const { email } = req.params;
        const item = await service.getByEmailUser(email);
        if (!item) throw new Error("User not found!");
    
        res.json(item);
        } catch (error) {
        next(error);
        }
    };


export const getAllCtr = async(req, res, next)=>{
    try {
        const items = await service.getAllUsers();
        res.Json(items);
    } catch (error) {
        next(error)        
    }
}

export const getAllusers = async(req, res, next)=>{
    try {
        const { page, limit}= req.query;
        const response = await service.getAllUsers(page, limit);
        res.json(response);
    } catch (error) {
        next(error)       
    }
}

export const createCtr = async (req, res, next) =>{
    try {
        const user ={...req.body};
        const newUser = await service.createUser(user);
        if(!newUser) throw new Error("validacion erronea");
        else res.Json(newUser);
    } catch (error) {
        next(error);
    }
}

export const updateCtr = async (req, res, next) =>{
    try {
        const {id} = req-params;
        const {name, description, price, stock} = req.body;
        
        let item = await service.getByIdUser(id);
        if(!item) throw new Error("user not found");

        const userUpdated = await service.updateUser(id, {
            name,
            description,
            price,
            stock,
        });
        res.Json({
            msg: "user updated",
            data: userUpdated,
        })        
    } catch (error) {
        next(error)
    }
}

export const deleteCtr = async(req, res, next)=>{
    try {
        const {id}=req.params;
    await service.deleteUser(id);
    res.Json({
        msg: "user deleted",
    })    
    } catch (error) {
        next(error);
    }
}

export const aggregation1 = async(req, res, next)=>{
    try {
        const {gender} = req.query
        const response = await service.aggregation1(gender);
        res.Json(response);
    } catch (error) {
        next(error)        
    }
}

export const updateManyUsers = async(req, res, next) =>{
    try {
        const response = await service.updateManyUsers();
        res.json(response)
    } catch (error) {
        next(error);
    }
}

