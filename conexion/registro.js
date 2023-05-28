import { initMongoDB, disconnectMongoDB} from "./conexion";
import { UserModel } from "./schema";

const createUser = async(newUser)=>{
    await UserModel.create(newUser);
    console.log("usuario creado ok🟢");
};

const testing = async()=>{
    await initMongoDB();

    const user = {
        firstname: "juan",
        lastname:"Perez",
        email:"pepepistola@gmail.com",
        age: 35
    }
    await createUser(user)
}

testing()