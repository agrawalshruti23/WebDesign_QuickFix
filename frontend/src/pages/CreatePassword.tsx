import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../Components/Input';
import Loader from '../Components/Loader/Loader';
import { required } from '../helper';
import {
  updatePassword,
  verifyForgotPasswordReqeust
} from '../helper/handleAPI';
import useFormValidation from '../hooks/useFormValidation';
import useInput from '../hooks/useInput';
import { DisplayState } from '../types/commonTypes';

export default function CreatePassword() {
  const [displayState, setDisplayState] = useState<DisplayState>('DEFAULT');
  const [username, setUsername] = useState('');
  const navigator = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    setDisplayState('LOADING');
    verifyForgotPasswordReqeust(token).then((res) => {
      if (res.verified) {
        setDisplayState('SUCCESS');
        setUsername(res.username);
      } else {
        console.log('Invalid token');
        setDisplayState('ERROR');
      }
    });
  }, []);
  const { updateValidation, onSubmitValidation } = useFormValidation();
  const password = useInput(
    { id: 'password', value: '', errorMessage: '' },
    [required],
    updateValidation
  );
  const rePassword = useInput(
    { id: 'repassword', value: '', errorMessage: '' },
    [required],
    updateValidation
  );

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    const { isValid } = onSubmitValidation();
    if (isValid) {
      if (password.value !== rePassword.value) {
        rePassword.changeErrorMessage('Password does not match');
      } else {
        const response = await updatePassword(username, password.value);
        if (response.username) {
          navigator('/login');
        }
      }
    }
  };
  return (
    <div className="bckgDesign">
      {displayState === 'SUCCESS' ? (
        <div className="signUp-Master">
          <div className="titleOfCreatePassword">
            <h2>Create New Password</h2>
          </div>
          <div>
            <form>
              <div className="inForm-flex-column">
                <Input
                  id="new-password"
                  label="New Password"
                  inputState={password}
                  type="password"
                />
                <Input
                  id="confirm-password"
                  label="Confirm Password"
                  inputState={rePassword}
                  type="password"
                />
              </div>
              <div className="button-container">
                <input
                  onClick={onSubmitClickHandler}
                  type="submit"
                  value="Submit"
                  className="submitButton"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loader message="Please wait..." />
      )}
    </div>
  );
}
