import express from 'express';
import userRoutes from './api/user.routes.js';

const router = express.Router();

router.use('/user', userRoutes);

export default router;
