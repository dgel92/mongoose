import "./db/db.js";

import {errorHandler} from "./middlewares/errorHandlers.js";
import express from 'express';
import productsRouter from "./routes/products.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);

app.use('/products', productsRouter)

app.listen(8080,()=>{
console.log('🚀servidor escuchando puerto 8080');
});