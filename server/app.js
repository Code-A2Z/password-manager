import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import { clerkMiddleware, requireAuth } from "@clerk/express";
import userRoutes from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(clerkMiddleware());

app.use('/api', userRoutes); 

export {app};
