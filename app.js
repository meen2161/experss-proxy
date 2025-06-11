import express from 'express';
import qwenRoute from './routes/qwen.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/qwen', qwenRoute);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
