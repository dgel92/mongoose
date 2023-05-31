import "./db/database.js";

import {errorHanbler} from "./middlewares/errorHandlers.js";
import express from 'express';
import morgan from "morgan";
import productsRouter from "./routes/products.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHanbler);
app.use(morgan)(`dev`)

app.use('/products', productsRouter)

const PORT = 8080;

app.listen(PORT,()=>{
console.log(`🚀servidor escuchando puerto ${PORT}`);
});