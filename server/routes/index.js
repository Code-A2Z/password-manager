import express from 'express';
import userRoutes from './api/user.routes.js';
import folderRoutes from './api/folder.route.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/folder', folderRoutes);

export default router;
