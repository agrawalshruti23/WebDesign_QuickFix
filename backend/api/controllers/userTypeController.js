import { query } from "express";
import * as model_service from '../services/userTypeService.js';

const setResponse =(obj, response) =>{
    response.status(200);
    response.json(obj);
}

const setError =(err,response) => {
    response.status(500);
    response.json(err);
}

export const userTypeitem_all = async (req, res) => {
    try {
        const userTypeItem = await model_service.find();
           setResponse(userTypeItem,res);
    }catch(error){
        setError(error,res);
    }
}

export const userTypeitem_details = async(req, res) =>{
    try{
        const userTypeitemId = req.params.id;
        const userTypeItem= await model_service.get(userTypeitemId);
        setResponse(userTypeItem,res);
    }
    catch(error){
        setError(error,res);
    }
}

export const userTypeitem_create = async(req, res) =>{
    try{
        console.log("course item Request is", req.body)
        const userTypeItem = req.body;
        const savedUserTypeitem= await model_service.save(userTypeItem);
    setResponse(savedUserTypeitem,res);
    }catch(error){
        setError(error,res);
    }
}