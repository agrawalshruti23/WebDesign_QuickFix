import userRoleModel from './../models/UserType.js'

export const save = (userId) => {
    const userTypeItem = new userRoleModel(userId);
    return userTypeItem.save();
}

export const get = (id) => {
    const userTypeItem = userRoleModel.findById(id).exec();
    return userTypeItem;
}

export const search = (query) => {
    const params = {...query};
    return userRoleModel.find(params).exec();
}

export const find =() =>{
    const userTypeItem = userRoleModel.find();
    return userTypeItem;
}