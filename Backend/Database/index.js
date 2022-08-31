const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const dbURI = "mongodb+srv://shiva-69:TB0Op4C0bZCVIszT@cluster0.81x2dcq.mongodb.net/Coinsapaze";
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error in connecting to Database")
    }
}

module.exports = {
    connectToDatabase,
}