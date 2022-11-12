import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    email:{
        type:String,
        required: true,
        unique: true,
    },
    username:{
        type:String,
        required: [true, 'Please add a userName.'],
    },
    password:{
        type:String,
        required: [true, 'Please add a password.'],
    },
    userType:{
        type: mongoose.Types.ObjectId,
        ref: 'userRoles',
        required: [true, 'Please Select a Type'],
    },
    currentCourses:[{ type: mongoose.Types.ObjectId, ref: 'Courses' }],
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },versionKey: false});


UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const model = mongoose.model("UserDetails", UserSchema);

export default model;

 