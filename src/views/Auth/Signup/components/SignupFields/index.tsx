import { useState } from 'react';
import * as utils from '../../../utils';

import { Fields } from "../../../../../components/Form";
import FormTitle from '../../../../../components/Form/components/FormTitle';
import FormField from "../../../../../components/Form/components/FormField";
import FormButton from "../../../../../components/Form/components/FormButton";
import PasswordField from '../../../../../components/Form/components/PasswordField';
import FormDescription from '../../../../../components/Form/components/FormDescription';


const LoginFields: Fields = ({ isSubmitting }) => {
  const [password, setPassword] = useState('');

  return (
    <>
      <FormTitle text='create your account' />
      <FormDescription text='enter your credentials to continue.' />
      <FormField
        required={ true }
        isFocused={ true }
        name="email"
        label="email"
        id="login-email"
        placeholder="johndoe@mail.com"
        onInput={ utils.validateEmail }
      />
      <PasswordField
        required={ true }
        name="password"
        id="login-password"
        onInput={ (password) => {
          setPassword(password);
          return utils.validatePassword(password);
        } }
      />
      <PasswordField
        required={ true }
        name="confirm-password"
        id="confirm-password"
        label='confirm password'
        placeholder='confirm password'
        onInput={ (newPassword) => utils.comparePassword(password, newPassword) }
      />
      <FormButton
        label="signup"
        disabled={ isSubmitting }
      />
    </>
  );
};


export default LoginFields;