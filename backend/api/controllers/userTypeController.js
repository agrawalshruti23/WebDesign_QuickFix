import * as model_service from '../services/userTypeService.js';
import * as controllerHelper from './../modules/controllerHelper.js';

export const getAllDetails = async (req, res) => {
    try {
        const userTypeitem = req.body;
        const userTypeItem = await model_service.find(userTypeitem);
        controllerHelper.setResponse(userTypeItem,res);
    }catch(error){
        controllerHelper.setError(error,res);
    }
}

export const getAllDetailsUsingId = async(req, res) =>{
    try{
        const userTypeitemId = req.params.id;
        const userTypeItem= await model_service.get(userTypeitemId);
        controllerHelper.setResponse(userTypeItem,res);
    }
    catch(error){
        controllerHelper.setError(error,res);
    }
}

export const createAllDetails = async(req, res) =>{
    try{
        console.log("course item Request is", req.body)
        const userTypeItem = req.body;
        const savedUserTypeitem= await model_service.save(userTypeItem);
        controllerHelper.setResponse(savedUserTypeitem,res);
    }catch(error){
        controllerHelper.setError(error,res);
    }
}
