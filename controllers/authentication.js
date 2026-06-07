const jwt = require("jsonwebtoken");
const nodeCache = require("node-cache");
const { otpCache, stuEmail } = require("./generateAndSendOTP");
const dotenv = require("dotenv")

dotenv.config();

const authenicate = (req,res) =>{
  const { OTP } = req.body;
    try {
        if(!OTP) {
          return res.status(400).json({ message: "OTP is required" });
  }
  const cachedOTP = otpCache.get(process.env.KEY);
  if(cachedOTP && cachedOTP.toString().trim() === OTP.toString().trim()) {
    const token = jwt.sign({email: stuEmail }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.cookie('token', token, { httpOnly: true }).status(200).json({ message: "Authentication successful" });
    otpCache.del(process.env.KEY);
  } else {
    return res.status(401).json({ message: "Invalid OTP" });
  }
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

module.exports = { authenicate };