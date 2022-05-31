import mongoose from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json());

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

const User = mongoose.model('BLOG', userSchema);

export default User;