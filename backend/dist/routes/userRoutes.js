import { Router } from 'express';
import UserController from '../controllers/userController.js';
const router = Router();
const userController = new UserController();
//Create a new user post request 
router.post('/users', (req, res) => { userController.addUser(req, res); });
//Get a user's name by id
router.get('/users/name/:id', (req, res) => { userController.getUserNameById(req, res); });
//Get a user's email by id'
router.get('/users/email/:id', (req, res) => { userController.getUserEmailById(req, res); });
//Update the user data
router.put("/users", (req, res) => { userController.updateUser(req, res); });
export default router;
