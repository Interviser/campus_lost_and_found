const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const nodeCache = require("node-cache");
const dotenv = require("dotenv")

dotenv.config();
var stuEmail = ""

const otpCache = new nodeCache({ stdTTL: 300 });

const authenticateToken = (req, res) => {
    stuEmail = req.body.stuEmail;
    if(!stuEmail) {
        return res.status(400).json({ message: "Student email is required" });
    }
    const OTP = Math.floor(100000 + Math.random() * 900000).toString();

    const generateAndSendOTP = async (email, OTP) => {
    try{
        if(!OTP) {
          return res.status(500).json({ message: "token is required" });
   }
   const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'samuelodoom149@gmail.com',
        pass: 'rigm cevv wzmp xjmh'
    }
});

const mailOptions = {
    from: 'samuelodoom149@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${OTP}`}
    html: `<p>Your OTP code is for logging into our lost and found site is <b>${OTP}</b></p>`

    const info = await transporter.sendMail(mailOptions);
    if(info) {
         res.status(200).json({ message: "OTP sent successfully" });
         otpCache.set(process.env.KEY, OTP);
    } 
    else{
        res.status(500).json({ message: "Failed to send OTP" });
    } 
    
}
    
    catch(error) {
        console.log("Error sending OTP email");
    }
}
    generateAndSendOTP(stuEmail, OTP);    
}
module.exports = { authenticateToken, otpCache, stuEmail };