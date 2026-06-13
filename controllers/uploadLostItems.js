const uploadLostItems = (req, res) => {
    const { name, description, location, dateLost, imageURL } = req.body;
    // Here you would typically save the lost item details to your database
    
    if(!name || !description || !location || !dateLost || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
    }

    res.status(200).json({ message: "Lost item uploaded successfully" });
}

module.exports = { uploadLostItems };