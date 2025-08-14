import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import connectDB from "./config/db.js";
import router from "./Routes/index.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(express.json());

// Connect to Database
connectDB();

// Routes
server.get("/", (req, res) => res.send("Server is running"));
server.use("/api", router);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
