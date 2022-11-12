import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema(
    {
        courseId:{
            type:String,
            required: true,
            unique: true,
        },
        professor:{
            type:String,
            required: true,
        },
        teachingAssistant:{
            type:String,
            required: true,
        },
        assignment:{
            type:String,
        },
        description:{
            type:String,
            required: true,
        },
        currentAssignment:{
            type:String,
        },versionKey: false});
    
const model = mongoose.model("Courses", CoursesSchema);

export default model;