import { FC } from 'react';

import * as utils from '../../utils';
import * as routes from '../../../../constants/routes';
import * as formTypes from '../../../../components/Form/types';

import ForgotPasswordFields from './ForgotPasswordFields';
import AuthForm from '../../../../components/AuthForm';


const LoginForm: FC = () => {
  const fields: formTypes.FormField[] = [
    { name: "email", value: "", validator: utils.validateEmail },
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
      promptLink={ routes.LOGIN }
      promptLinkText="login"
      promptText="Go back to"
    >
      <ForgotPasswordFields />
    </AuthForm>
  );
};


export default LoginForm;