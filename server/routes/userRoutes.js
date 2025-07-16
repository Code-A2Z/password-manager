import express from 'express';
import UserData from '../models/UserData.js';

const router = express.Router();

router.post('/oauth', async (req, res) => {
  const { id, name } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    let user = await UserData.findOne({ userId: id });

    if (!user) {
      user = await UserData.create({
        userId: id,
        name: name || '',
        storage: ''
      });
    }

    res.status(200).json({
      message: 'User authorized successfully',
      user: {
        userId: user.userId,
        name: user.name,
        storage: user.storage
      }
    });
  } catch (error) {
    console.error('OAuth Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


/* Save user's storage URL
 */


router.post('/storage', async (req, res) => {
  const { id, storage } = req.body;

  if (!id || !storage) {
    return res.status(400).json({ error: 'User ID and storage URL are required' });
  }

  try {
    const user = await UserData.findOneAndUpdate(
      { userId: id },
      { $set: { storage } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      message: 'Storage updated successfully',
      storage: user.storage
    });
  } catch (error) {
    console.error('Storage Update Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
