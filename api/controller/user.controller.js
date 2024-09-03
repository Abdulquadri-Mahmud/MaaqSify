import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const {username, country, state, fullAddress, email, mobile, password} = req.body;
    
    try {
        
        const checkIfEmailExist = await User.findOne({email});
        const checkIfMobileExist = await User.findOne({mobile});

        if (checkIfEmailExist) {
            return next(errorHandler(404, 'Email has already been used by another user!'));
        }
        if (checkIfMobileExist) {
            return next(errorHandler(404, 'Mobile number has been been used by another user!'))
        }
        
    
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({username, country, state, fullAddress, email, mobile, password : hashedPassword});

        await newUser.save();
        res.status(200).json('User created successfully!');

    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        const validUser = await User.findOne({email});
        // check if user is not found
        if (!validUser) {
            return next(errorHandler(404, 'User Not Found!'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(404, 'Wrong Credential!'));
        }
        const webtoken = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

        console.log(validUser._id);
        console.log(validUser._doc);

        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', webtoken, {httpOnly : true}).status(200).json(rest);

    } catch (error) {
        next(error)
    }
}