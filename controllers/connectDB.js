const monfoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await monfoose.connect(process.env.MONGO_URI);
  
        if(!conn) {
            throw new Error('MongoDB connection failed');
        }

    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
module.exports = {connectDB};