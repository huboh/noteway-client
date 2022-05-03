import { FC } from 'react';
import * as constants from '../../../../../constants';

import SignupFields from '../SignupFields';
import AuthForm from '../../../../../components/AuthForm';


const SignupForm: FC = () => {
  const onSubmit = async (formEntries: any) => {
    const { email, password } = formEntries;
  };

  return (
    <AuthForm
      promptLinkText="login"
      promptText="already have an account?"
      promptLink={ constants.LOGIN_ROUTE }
      onSubmit={ onSubmit }
      fields={ SignupFields }
    />
  );
};


export default SignupForm;