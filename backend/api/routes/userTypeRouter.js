import express from "express";
import * as userTypeController from "../controllers/userTypeController.js";


const router = express.Router();


router.route('/')
.post(userTypeController.createAllDetails)
.get(userTypeController.getAllDetails);

router.route('/:id')
.get(userTypeController.getAllDetailsUsingId);


export default router;
