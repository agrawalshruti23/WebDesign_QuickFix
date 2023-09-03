import mongoose from 'mongoose';
import { IUserSchema } from '../../types/user';

const UserSchema = new mongoose.Schema<IUserSchema>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Please add a userName.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password.']
  },
  userType: {
    type: String,
    required: [true, 'Please Select a Type']
  },
  currentCourses: [{ type: mongoose.Types.ObjectId, ref: 'Courses' }],
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  description: {
    type: String
  },
  linkedInURL: {
    type: String
  },
  experience: {
    type: Number
  }
});

const model = mongoose.model('User', UserSchema);

export default model;
