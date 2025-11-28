import User from "../shema/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
  try {
    console.log("request body:", req.body);
    const { name, email, password } = req.body;
    
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    
    const hashedPassword = await bcrypt.hash(password, 12);
    
   
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    
    await user.save();
    res.status(201).json({ message: "User created successfully" });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    
    const user = await User.findOne({ email });
    if (!user) {
      // Check for hardcoded admin
      const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'eyyadezrafel02@gmail.com';
      const ADMIN_PASS = process.env.ADMIN_PASS || 'eyyad1234';
      if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        const secret = process.env.JWT_SECRET || 'dev_jwt_secret';
        if (!process.env.JWT_SECRET) console.warn('WARNING: using fallback JWT secret for admin token (dev only)');
        const token = jwt.sign(
          { id: 'admin', role: 'admin', email: ADMIN_EMAIL },
          secret,
          { expiresIn: '1d' }
        );
        return res.json({ message: 'Login successful', token, user: { id: 'admin', name: 'Admin', email: ADMIN_EMAIL, role: 'admin' } });
      }
      return res.status(404).json({ message: "User not found" });
    }
    
    
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }
    
    
    const secret = process.env.JWT_SECRET || 'dev_jwt_secret';
    if (!process.env.JWT_SECRET) console.warn('WARNING: using fallback JWT secret for login token (dev only)');
    const token = jwt.sign(
      { id: user._id, role: user.role },
      secret,
      { expiresIn: "1d" }
    );
    
    res.json({ 
      message: "Login successful", 
      token, 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};