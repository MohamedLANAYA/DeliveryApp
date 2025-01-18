import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // Validate inputs
    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ success:false,message: "Invalid password" });

     const token=createToken(user.id);
     res.json({ success: true, token });
           
        
    } catch (error) {
      console.log(error);
      res.status(500).json({success:false, message: "Server error" });
        
    }
  }
//  jwt token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Validate inputs
  try {
    const exists = await userModel.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already exists" });

    // validate password and email
    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email" });
    if (!validator.isLength(password, { min: 8 }))
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });

    // if (password.length < 8) {
    //   return res
    //     .status(400)
    //     .json({ message: "Password must be at least 8 characters" });
    // }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { loginUser, registerUser };




