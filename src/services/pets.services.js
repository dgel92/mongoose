import PetsDaoMongoDB from "../daos/mongoDb/pets.dao.js";

const petsDao = new PetsDaoMongoDB();

export const addPetToUser = async (userId, petId)=>{
    try {
        const exists = await petsDao.getPetById(petId)
        const newPet = await petsDao.addPetToUser(userId, petId);
        if (!exists) throw new Error("mascota no encontrada");
        else return newPet;
    } catch (error) {
        console.log(error);
        
    }
}

export const getByIdPet = async (id)=>{
    try {
        const item = await petsDao.getPetById(id);
        if(!item) throw new error("pet not found");
        else return item;        
    } catch (error) {
        console.log(error);
    }
}

export const createPet = async (obj) =>{
    try {
        const newPet = await petsDao.createPet(obj);
        if (!newPet) throw new Error("Validation Error!");
        else return newPet;
    } catch (error) {
    console.log(error);
    }
}

export const updatePet = async (id, ob) =>{
    try {
        let item = await petsDao.getPetById(id);
        if(!item){
            throw new Error("pet not found")
        }else{
            const petUpdated = await petsDao.updatePet(id, obj);
            return petUpdated
        }
    } catch (error) {
        console.log(error);
    }
}

export const deletePet = async (id) => {
    try {
        const petDeleted = await petsDao.deletePet(id);
        return petDeleted
    } catch (error) {
        console.log(error);
    }
}