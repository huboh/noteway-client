import { FC } from 'react';
import { MdLogin } from 'react-icons/md';

import FormTitle from '../../../../../components/Form/components/FormTitle';
import FormField from "../../../../../components/Form/components/FormField";
import FormButton from "../../../../../components/Form/components/FormButton";
import FormDescription from '../../../../../components/Form/components/FormDescription';


const ForgotPasswordFields: FC = () => {
  return (
    <>
      <FormTitle text='forgot your password?' />
      <FormDescription text="enter the email address associated with your account & we'll send you a reset link." />
      <FormField
        required={ true }
        isFocused={ true }
        name="email"
        label="email"
        id="login-email"
        placeholder="johndoe@mail.com"
      />
      <FormButton
        label="reset password"
      />
    </>
  );
};


export default ForgotPasswordFields;