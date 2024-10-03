import express from 'express';
import { signup, login, getProfile, updateProfile } from '../controller/UserController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);


export default router;  

