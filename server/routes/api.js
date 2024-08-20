import express from 'express';
const router = express.Router();
import User from '../models/user';

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).send({ message: 'Registration failed', error: error.message });
    }
});

module.exports = router;