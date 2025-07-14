import express from 'express';
import { clerkMiddleware, requireAuth } from "@clerk/express";
import UserData from '../models/UserData.js';

const router = express.Router();


/*
 Check if user is authorized
 */
router.get('/oauth', requireAuth(), async (req, res) => {
  const { userId } = req.auth;

  let user = await UserData.findOne({ userId });

  if (!user) {
    user = await UserData.create({ userId });
  }

  res.json({
    name: user.name,
    storage: user.storage,
    is_authorized: true
  });
});

/* Save user's storage URL
 */
router.post('/storage', requireAuth(), async (req, res) => {
  const { userId } = req.auth;
  const { storage } = req.body;

  if (!storage) {
    return res.status(400).json({ error: 'Storage URL is required' });
  }

  const user = await UserData.findOneAndUpdate(
    { userId },
    { $set: { storage } },
    { new: true, 
      upsert: true 
    }
  );

  res.json({ message: 'Storage saved successfully', storage: user.storage });
});

export default router;
