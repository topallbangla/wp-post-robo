import express from 'express';
const router = express.Router();

// internal modules
import poster from '../controllers/poster.controller.js';

router.post('/poster', poster);

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to API Home'
  });
});


export default router;