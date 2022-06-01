import { FC } from 'react';

import useAuth from '../../../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

import * as utils from '../../utils';
import * as constants from '../../../../constants';
import * as formTypes from '../../../../components/Form/types';

import LoginFields from './LoginFields';
import AuthForm from '../../../../components/AuthForm';


const LoginForm: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location: any = useLocation();

  const from = location.state?.from?.pathname || constants.HOME_ROUTE;

  const fields: formTypes.FormField[] = [
    { name: "email", value: "", validator: utils.validateEmail },
    { name: "password", value: "", validator: utils.validatePassword },
  ];

  const onSubmit = async (credentials: any) => {
    const { email, password } = credentials;

    return auth.login?.({
      credentials: { email, password },
      onError: (error) => console.log(error.message),
      onSuccess: () => navigate(from, { replace: true }),
    });
  };

  return (
    <AuthForm
      fields={ fields }
      onSubmit={ onSubmit }
      includeLogo={ false }
      promptLink={ constants.SIGNUP_ROUTE }
      promptLinkText="signup"
      promptText="Don't have an account yet?"
    >
      <LoginFields />
    </AuthForm>
  );
};


export default LoginForm;