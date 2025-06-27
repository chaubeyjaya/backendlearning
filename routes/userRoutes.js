import express from 'express';
import { getUsers, login,register,showdata } from '../controllers/userController.js';

const router = express.Router();

router.get('/getAllUser', showdata);
router.post('/login', login);
router.post('/register',register)

export default router;
