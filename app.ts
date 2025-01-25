import express from 'express';


const app = express();

// Health check route
app.get('/', (req, res) => {
    res.send('API is running...');
  });

export default app;
