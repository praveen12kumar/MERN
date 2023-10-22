import express from "express";
import {config} from "dotenv";
import goalRouter from "./routes/goalRoutes.js";
import {errorHandler} from "./middleware/errorMiddleware.js"

config();

const PORT = process.env.PORT || 3000;

const app = express();

// use middleware
// to get values from body of postman

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// use Router

app.use('/api/v1/', goalRouter);

app.use(errorHandler);

app.listen(PORT, (req, res)=>{
    console.log(`Server listening on ${PORT}`);
})