import { MdLogin } from 'react-icons/md';

import * as utils from '../../../utils';
import * as constants from '../../../../../constants';

import { Fields } from "../../../../../components/Form";
import StyledLink from '../../../../../components/StyledLink';
import FormTitle from '../../../../../components/Form/components/FormTitle';
import FormField from "../../../../../components/Form/components/FormField";
import FormButton from "../../../../../components/Form/components/FormButton";
import PasswordField from '../../../../../components/Form/components/PasswordField';
import FormDescription from '../../../../../components/Form/components/FormDescription';


const LoginFields: Fields = ({ isSubmitting }) => {
  return (
    <>
      <FormTitle text='welcome back !!!' />
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
        onInput={ utils.validatePassword }
        labelLink={ <StyledLink text='forgot password?' to={ constants.FORGOT_PASSWORD_ROUTE } /> }
      />
      <FormButton
        label="login"
        disabled={ isSubmitting }
        icon={ <MdLogin /> }
      />
    </>
  );
};


export default LoginFields;