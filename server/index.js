import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from './Routes/Router.js';


// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Connect to MongoDB
const mongo_url = process.env.mongo_url;
mongoose.connect(mongo_url)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("MongoDB Connection Error:", err);
    });

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use('/', Router)


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Live: http://localhost:${PORT}`);
});
