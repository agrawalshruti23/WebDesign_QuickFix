import * as model_service from '../services/userService.js';
import bcrypt from "bcrypt";
import * as controllerHelper from '../modules/controllerHelper.js';

export const getAllDetails = async (req, res) => {
    try {
        const userItems = await model_service.find();
        controllerHelper.setResponse(userItems,res);
    }catch(error){
        controllerHelper.setError(error,res);
    }
}

export const getAllDetailsUsingId = async(req, res) =>{
    try{
        const useritemId = req.params.id;
        const userItem= await model_service.get(useritemId);
        controllerHelper.setResponse(userItem,res);
    }
    catch(error){
        controllerHelper.setError(error,res);
    }
}

export const createAllDetails = async(req, res) =>{
    try{
        console.log("Request is", req.body)
        const userItem = req.body;
        userItem.password = bcrypt.hashSync(req.body.password, 10);
        const savedUseritem= await model_service.save(userItem);
        controllerHelper.setResponse(savedUseritem,res);
    }catch(error){
        controllerHelper.setError(error,res);
    }
}


