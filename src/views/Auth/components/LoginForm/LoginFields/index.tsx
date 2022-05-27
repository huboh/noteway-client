import { FC } from 'react';
import { MdLogin } from 'react-icons/md';

import * as constants from '../../../../../constants';

import StyledLink from '../../../../../components/StyledLink';
import FormTitle from '../../../../../components/Form/components/FormTitle';
import FormField from "../../../../../components/Form/components/FormField";
import FormButton from "../../../../../components/Form/components/FormButton";
import PasswordField from '../../../../../components/Form/components/PasswordField';
import FormDescription from '../../../../../components/Form/components/FormDescription';


const LoginFields: FC = () => {
  return (
    <>
      <FormTitle text='welcome back!' />
      <FormDescription text='log into your account to continue.' />
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
        id="login-password"
        label='password'
        placeholder='password'
        labelLink={ <StyledLink text='forgot password?' to={ constants.FORGOT_PASSWORD_ROUTE } /> }
      />
      <FormButton
        label="login"
        icon={ <MdLogin /> }
      />
    </>
  );
};


export default LoginFields;