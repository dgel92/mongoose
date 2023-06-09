import "./db/database.js";

import {errorHanbler} from "./middlewares/errorHandlers.js";
import express from 'express';
import petsRouter from "./routes/pets.router.js"
import productsRouter from "./routes/products.router.js";
import usersRouter from "./routes/users.router.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHanbler);

app.use('/products', productsRouter)
app.use('/users', usersRouter)
app.use('/pets', petsRouter)


const PORT = 8080;

app.listen(PORT,()=>{
console.log(`🚀servidor escuchando puerto ${PORT}`);
});