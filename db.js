const mongoose = require("mongoose");
require('dotenv').config();

// Retrieve the database URL from the environment variables
const DATABASEURL = process.env.DATABASE_URL;

// Function to connect to the database
module.exports.connect = () => {
    mongoose.connect(DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose is connected successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};
