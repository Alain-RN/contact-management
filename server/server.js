/* eslint-disable no-undef */
 
import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import contactRoute from "./routes/contact.route.js"

const app = express();
const PORT = 5000;
const db = "contact-db"

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute)

mongoose.connect(`mongodb://localhost:27017/${db}`)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    })
    .catch(() => {
        console.log('Connection failed')
    })