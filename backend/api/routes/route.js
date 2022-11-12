import express from "express";
import * as userController from "../controllers/userController.js";
import * as courseController from "../controllers/coursesController.js";
import * as userTypeController from "../controllers/userTypeController.js";


const router = express.Router();

router.route('/')
.post(userController.createAllDetails)
.get(userController.getAllDetails);

router.route('/:id')
.get(userController.getAllDetailsUsingId);

router.route('/courses/')
.post(courseController.createAllDetails)
.get(courseController.getAllDetails);

router.route('/courses/:id')
.get(courseController.getAllDetailsUsingId);


router.route('/userType/')
.post(userTypeController.createAllDetails)
.get(userTypeController.getAllDetails);

router.route('/userType/:id')
.get(userTypeController.getAllDetailsUsingId);


export default router;
