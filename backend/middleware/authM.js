import jwt from "jsonwebtoken";

export const authM = (req , res , next ) => {
    try {
        const token = req.headers.authorization.split("")[1];

        if (!token) return res.status(401).json({message:"access denied"});

        const decoded = jwt.verify(token , process.env.JWT-SECRET);
        req.user = decoded;

        next();
    }catch(error){
        res.status(401).json({message:"invalid token"});
    }
}