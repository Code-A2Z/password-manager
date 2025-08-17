import express from "express";
import { authenticateUser } from "../../Middlewares/auth.middleware.js";
import { createFolder } from "../../Controllers/folder.controller.js";

const folderRoutes = express.Router();

folderRoutes.post('/create', authenticateUser, createFolder);

export default folderRoutes;
