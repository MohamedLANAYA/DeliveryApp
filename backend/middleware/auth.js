import jwt from "jsonwebtoken";
import  "dotenv/config";
const authMiddleware = (req, res, next) => {
  const {token} = req.headers;
  if (!token) {
    return res.status(401).json({success:false, message: "Token not provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId=decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
export default authMiddleware;
