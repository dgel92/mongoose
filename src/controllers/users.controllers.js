import * as service from "../services/user.services.js";

export const createFileCtr = async (req, res, next) =>{
    try {
        const newUsers = await service.createFileUser();
        if(!newUsers) throw new Error("validacion erronea");
        else res.Json(newUsers);
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

export const getByNameCtr = async (req, res, next) =>{
    try {
        const {name} = req.query;
        const item = await service.getByNameCtr(name);
        if(!item) throw new Error("usuario no encontrado");
        res.json(item)
    } catch (error) {
        next(error);
    }
}

export const getByemailCtr = async (req, res, next)=>{
    try {
        const {email} = req.params;
        item = await service.getByemailUser(email);
        if(!item) throw new error("user not found")
        res.Json(item)
    } catch (error) {
        next(error)
    }
}
export const getAllCtr = async(req, res, next)=>{
    try {
        const items = await service.getAllUsers();
        res.Json(items);
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





