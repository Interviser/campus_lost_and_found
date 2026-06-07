const jwt = require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message:"No token provided"})
    }
   try{jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message:"Invalid token"})
        }
        req.email = decoded.email
        next()
    })
}
catch(error){
    return res.status(500).json({message:error.message})
}
}

module.exports = { verifyToken }