const {Admin} = require('../schemas/adminLoginSchema'); 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
   try {
     const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
   const admin = await Admin.findOne({ email });
    if(!admin) {
        return res.status(404).json({ message: "Admin not found" });
    }
   const isMatch = await bcrypt.compare(password, admin.password);
    if(!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ email: admin.email, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }).status(200).json({ message: "Login successful" });
}
   catch (error) {
    res.status(500).json({ message: "Internal server error" });
   }}

module.exports = { adminLogin };