import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT }`);
    })
)
.catch(
    (error) => console.error("Error connecting to MongoDB", error)
)