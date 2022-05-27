import { FC } from 'react';

import FormTitle from '../../../../../components/Form/components/FormTitle';
import FormField from "../../../../../components/Form/components/FormField";
import FormButton from "../../../../../components/Form/components/FormButton";
import PasswordField from '../../../../../components/Form/components/PasswordField';
import FormDescription from '../../../../../components/Form/components/FormDescription';


const SignupFields: FC = () => (
  <>
    <FormTitle text='welcome to itoma.' />
    <FormDescription text="let's get you started. create an account to continue." />
    <FormField
      required={ true }
      isFocused={ true }
      name="email"
      label="email"
      id="login-email"
      placeholder="johndoe@mail.com"
    />
    <PasswordField
      required={ true }
      name="password"
      label='password'
      id="login-password"
      placeholder='password'
    />
    <PasswordField
      required={ true }
      name="confirm-password"
      id="confirm-password"
      label='confirm password'
      placeholder='confirm password'
    />
    <FormButton
      label="signup"
    />
  </>
);


export default SignupFields;