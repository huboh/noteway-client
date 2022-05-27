import { FC } from 'react';

import * as utils from '../../utils';
import * as constants from '../../../../constants';
import * as formTypes from '../../../../components/Form/types';

import SignupFields from './SignupFields';
import AuthForm from '../../../../components/AuthForm';


const SignupForm: FC = () => {
  const fields: formTypes.FormField[] = [
    { name: "email", value: "", validator: utils.validateEmail },
    { name: "password", value: "", validator: utils.validatePassword },
    { name: "confirm-password", value: "", validator: (newPassword, fields) => utils.comparePassword(fields.find((field) => field.name === "password")?.value || "", newPassword) },
  ];

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
    return new Promise(resolve => setTimeout(resolve, 4000, formValues));
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