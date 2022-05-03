import { FC } from 'react';
import * as constants from '../../../../../constants';

import LoginFields from '../LoginFields';
import AuthForm from '../../../../../components/AuthForm';


const LoginForm: FC = () => {
  const onSubmit = async (formEntries: any) => {
    const { email, password } = formEntries;
  };

  return (
    <AuthForm
      promptLinkText="signup"
      promptText="Don't have an account yet?"
      promptLink={ constants.SIGNUP_ROUTE }
      onSubmit={ onSubmit }
      fields={ LoginFields }
    />
  );
};


export default LoginForm;