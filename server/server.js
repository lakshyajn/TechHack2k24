import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import User from './models/user.js';

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MongoDBurl = process.env.MongoDBurl;

mongoose.connect(MongoDBurl, {})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

// Routes for serving HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

app.get('/challenges', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/challenges.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/schedule.html'));
});

app.get('/sponsors', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/sponsors.html'));
});

app.get('/dashboard', async (req, res) => {
    const userId = req.query.userId;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
