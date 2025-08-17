import express from "express";
import { authenticateUser } from "../../Middlewares/auth.middleware";
import { createFolder } from "../../Controllers/folder.controller";

const folderRoutes = express.Router();

folderRoutes.post('/create', authenticateUser, createFolder);

export default folderRoutes;
