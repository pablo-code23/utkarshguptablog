import express from 'express';
import User from './userschema.js';
const router = express.Router();
const app = express();
app.use(express.json());

const Authenticationfunction = (req, res, next) => {
    console.log("hello");
    next();
};

router.post('/Contact', async (req, res) => {

    const { name, phone, email, feedback } = req.body;

    if (!name || !phone || !email || !feedback) {
        return res.status(422).json({ error: 'please fill complete form!!' });
    }

    try {

        const feedbacknew = new User({ name, phone, email, feedback });

        await feedbacknew.save();

        res.status(201).json({ message: 'Thanks for Feedback!!!' })

    }
    catch (err) {
        console.log('error')
    } 
});

export default router