import express from "express";
import * as courseController from "../controllers/coursesController.js";


const router = express.Router();


router.route('/')
.post(courseController.createAllDetails)
.get(courseController.getAllDetails);

router.route('/:id')
.get(courseController.getAllDetailsUsingId);


export default router;
