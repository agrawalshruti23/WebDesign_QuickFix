import { query } from "express";
import * as model_service from './../services/courseService.js';
import * as controllerHelper from './../modules/controllerHelper.js';


export const getAllDetails = async (req, res) => {
    try {
        // console.log("Hello error")
        const courseItem = await model_service.find();
        controllerHelper.setResponse(courseItem,res);
    }catch(error){
        console.log("Error is", error)
        controllerHelper.setError(error,res);
    }
}

export const getAllDetailsUsingId = async(req, res) =>{
    try{
        const courseitemId = req.params.id;
        const courseItem= await model_service.get(courseitemId);
        controllerHelper.setResponse(courseItem,res);
    }
    catch(error){
        console.log("error is", error)
        controllerHelper.setError(error,res);
    }
}

export const createAllDetails = async(req, res) =>{
    try{
        console.log("course item Request is", req.body)
    const courseItem = req.body;
    const savedCourseitem= await model_service.save(courseItem);
    controllerHelper.setResponse(savedCourseitem,res);
    }catch(error){
        controllerHelper.setError(error,res);
    }
}