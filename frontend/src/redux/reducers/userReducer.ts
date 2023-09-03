import { UPDATE_USER_DETAILS } from '../actions/type';

export interface IUser {
  email: string;
  username: string;
  userType: string;
  currentCourse: Array<string>;
  id: string;
  gender: string;
  description: string;
  linkedInURL: string;
  experience: number;
}

const initialState = {
  email: '',
  username: '',
  userType: '',
  currentCourse: [],
  gender: '',
  description: '',
  linkedInURL: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAILS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
export default userReducer;
