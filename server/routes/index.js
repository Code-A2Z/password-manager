import express from 'express';
import folderRoutes from './api/folder.route.js';

const router = express.Router();

router.use('/folder', folderRoutes);

export default router;
