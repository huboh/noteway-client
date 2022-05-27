import { FC, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import useLogin from '../../../../hooks/useLogin';

import * as utils from '../../utils';
import * as constants from '../../../../constants';
import * as formTypes from '../../../../components/Form/types';

import LoginFields from './LoginFields';
import AuthForm from '../../../../components/AuthForm';


const LoginForm: FC = () => {
  const navigate = useNavigate();

  const [login] = useLogin({
    onError: (error) => {
      console.log('login error :', error);
    },

    onCompleted: (data: any) => {
      const user = data.userLogin.user;
      const authToken = data.userLogin.authToken;

      if (!user || !authToken) return;

      sessionStorage.setItem(constants.TOKEN_KEY, authToken);
      navigate(constants.HOME_ROUTE);
    },
  });

  const fields: formTypes.FormField[] = [
    { name: "email", value: "", validator: utils.validateEmail },
    { name: "password", value: "", validator: utils.validatePassword },
  ];

  const onSubmit = useCallback(async (formValues: any) => login({
    variables: {
      loginCredentials: {
        email: formValues.email,
        password: formValues.password,
      }
    }
  }),
    [login]
  );

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