import express from "express";
import * as userController from "../controllers/controller.js";
import * as courseController from "../controllers/coursesController.js";
import * as userTypeController from "../controllers/userTypeController.js";


const router = express.Router();

router.route('/')
.post(userController.useritem_create)
.get(userController.useritem_all);

router.route('/:id')
.get(userController.useritem_details);

router.route('/courses/')
.post(courseController.courseitem_create)
.get(courseController.courseitem_all);

router.route('/courses/:id')
.get(courseController.courseitem_details);


router.route('/userType/')
.post(userTypeController.userTypeitem_create)
.get(userTypeController.userTypeitem_all);

router.route('/userType/:id')
.get(userTypeController.userTypeitem_details);


export default router;
