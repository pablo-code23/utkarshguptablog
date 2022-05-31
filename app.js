import dotenv from 'dotenv';
import express from "express";
import Router from './routers.js';
import mongoose from 'mongoose';
import 'dotenv/config';
dotenv.config({path:'./config.env'});
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(Router);

dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("connected to database succesully")
}).catch((err)=>{
    console.log('connection failed');
});


if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
        console.log('server running at PORT');
    });




