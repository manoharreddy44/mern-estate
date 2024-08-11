import express from 'express';
import { signup, signin, google } from '../controllers/auth.controller.js';
import { signout } from '../controllers/auth.controller.js';


const router = express.Router();


router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.get('/signout', signout);

export default router;