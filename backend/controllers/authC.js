import User from "../shema/User.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// Signup controller ma3 hashed password
export const signup = async (req , res) => {
    try {
            const{name , email,password} = req.body;
            const existingUser = await User.findMany({email});
            if (existingUser)
                return res.status(400).json({message:"User already exists"});


                const hahsedPassword = await bycrypt.hash(password,12);
                const user = new User ({
                        name,
                        email,
                        password: hahsedPassword,
                });

                await user.save();
                res.status(201).json({massage:"user craeted successfully"});

            }catch (error){
                res.status(500).json({message:error.message});
            }
        };



//login controller ma3 jwt token
export const login = async (req , res) => {
    try {
        const {email , password } = req.body ;
    
        const user = await User.findOne({email});
        if (!user)
            return res.status(404).json({message:"user not found"});

        const isPasswordCorrect = await bycrypt.compare(password , user.password);
        if (!isPasswordCorrect)
            return res.status(400).json({message : "invaild password"});

        const token = jwt.sign(
            { id : user._id , role : user.role},
            process.env.JWT_SECRET,
            {expiresIn : "1d"}
        );

        res.json ({message : "login successful" , token , user });
    }catch (error){
        res.status(500).json({message : error.message});
    }
};

