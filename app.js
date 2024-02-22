// external modules
import express from 'express';
import cors from 'cors';

// internal modules
import apiRouter from './routes/api.route.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', apiRouter);

// home route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Home'
  });
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not found'
  });
});

// server error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: 'something broke'
  });
});

export default app;