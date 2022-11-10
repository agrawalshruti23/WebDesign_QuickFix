import { query } from "express";
import * as model_service from './../services/service.js';
import bcrypt from "bcrypt";

const setResponse =(obj, response) =>{
    response.status(200);
    response.json(obj);
}

const setError =(err,response) => {
    response.status(500);
    response.json(err);
}

export const useritem_all = async (req, res) => {
    try {
        const userItems = await model_service.find();
           setResponse(userItems,res);
    }catch(error){
        setError(error,res);
    }
}

export const useritem_details = async(req, res) =>{
    try{
        const useritemId = req.params.id;
        const userItem= await model_service.get(useritemId);
        setResponse(userItem,res);
    }
    catch(error){
        setError(error,res);
    }
}

export const useritem_create = async(req, res) =>{
    try{
        console.log("Request is", req.body)
        const userItem = req.body;
        userItem.password = bcrypt.hashSync(req.body.password, 10);
        const savedUseritem= await model_service.save(userItem);
        setResponse(savedUseritem,res);
    }catch(error){
        setError(error,res);
    }
}


