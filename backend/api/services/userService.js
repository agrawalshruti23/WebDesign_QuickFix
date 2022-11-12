import userModel from '../models/User.js'


export const save = (userId) => {
    const userItem = new userModel(userId);
    return userItem.save();
}

export const get = (id) => {
    const userItem = userModel.findById(id).exec();
    return userItem;
}

export const search = (query) => {
    const params = {...query};
    return userModel.find(params).exec();
}

export const find =() =>{
    const userItem = userModel.find();
    return userItem;
}