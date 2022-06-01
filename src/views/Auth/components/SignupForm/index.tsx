import { FC } from 'react';

import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import * as utils from '../../utils';
import * as constants from '../../../../constants';
import * as formTypes from '../../../../components/Form/types';

import SignupFields from './SignupFields';
import AuthForm from '../../../../components/AuthForm';


const SignupForm: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const fields: formTypes.FormField[] = [
    { name: "email", value: "", validator: utils.validateEmail },
    { name: "password", value: "", validator: utils.validatePassword },
    { name: "confirm-password", value: "", validator: (newPassword, fields) => utils.comparePassword(fields.find((field) => field.name === "password")?.value || "", newPassword) },
  ];

  const onSubmit = async (credentials: any) => {
    const { email, password } = credentials;

    return auth.signup?.({
      credentials: { email, password },
      onError: (error) => console.log(error.message),
      onSuccess: () => navigate(constants.HOME_ROUTE, { replace: true }),
    });
  };

  return (
    <AuthForm
      fields={ fields }
      onSubmit={ onSubmit }
      includeLogo={ false }
      promptLink={ constants.LOGIN_ROUTE }
      promptLinkText="login"
      promptText="already have an account?"
    >
      <SignupFields />
    </AuthForm>
  );
};


export default SignupForm;