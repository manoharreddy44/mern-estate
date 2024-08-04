import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';





export const signup = async(req,res,next) =>{

    const {username,email, password} = req.body;

    

    const hashedPassword = bcrypt.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    });


    try{

        await newUser.save();
        res.status(201).json("User created successfully");
    }
    catch(error){
        console.log(error);
        next(errorHandler(550,'declaring error by function'));
    }
    
}