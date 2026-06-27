const {itemModel} = require('../schemas/ItemSchema');
const uploadLostItems = async (req, res) => {
    const { name, description, location, dateLost, imageURL } = req.body;
    const stuEmail = req.email;

    try {
    if(!name || !description || !location || !dateLost || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newLostItem = new itemModel({
        name,
        description,
        location,
        dateLost,
        imageURL,
        stuEmail
    });

   const savedItem = await newLostItem.save();

    if(savedItem) {
       return res.status(201).json({ message: "Lost item uploaded successfully" });
    }
    return res.status(500).json({ error: "oops! Something went wrong." });

    
} catch (error) {
    return res.status(500).json({ error: "Internal server error" });
}}

module.exports = { uploadLostItems };