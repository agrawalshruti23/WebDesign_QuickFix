import { query } from "express";
import * as model_service from './../services/courseService.js';

const setResponse =(obj, response) =>{
    response.status(200);
    response.json(obj);
}

const setError =(err,response) => {
    console.log("Error is here"+err)
    response.status(500);
    response.json(err);
}

export const courseitem_all = async (req, res) => {
    try {
        console.log("Hello error")
        const courseItem = await model_service.find();
        setResponse(courseItem,res);
    }catch(error){
        console.log("Error is", error)
        setError(error,res);
    }
}

export const courseitem_details = async(req, res) =>{
    try{
        const courseitemId = req.params.id;
        const courseItem= await model_service.get(courseitemId);
        setResponse(courseItem,res);
    }
    catch(error){
        console.log("error is", error)
        setError(error,res);
    }
}

export const courseitem_create = async(req, res) =>{
    try{
        console.log("course item Request is", req.body)
    const courseItem = req.body;
    const savedCourseitem= await model_service.save(courseItem);
    setResponse(savedCourseitem,res);
    }catch(error){
        setError(error,res);
    }
}