import courseModel from './../models/courses.js'
// import userRoleModel from './../models/UserType.js'

export const save = (userId) => {
    const courseItem = new courseModel(userId);
    return courseItem.save();
}

export const get = (id) => {
    const courseItem = courseModel.findById(id).exec();
    return courseItem;
}

export const search = (query) => {
    const params = {...query};
    return courseModel.find(params).exec();
}

export const find =() =>{
    const courseItem = courseModel.find();
    return courseItem;
}