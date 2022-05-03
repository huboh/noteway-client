import { FC } from 'react';

import './auth-form.scss';
import Logo from '../Logo';
import StyledLink from '../StyledLink';
import Form, { FormProps } from '../Form/index';

export interface AuthFormProps extends FormProps {
  promptText: string;
  promptLink: string;
  promptLinkText: string;
  includeLogo?: boolean;
}


const AuthForm: FC<AuthFormProps> = ({ onSubmit, fields, includeLogo = true, promptText, promptLink, promptLinkText }) => (
  <section className='auth-form-wrapper'>
    { includeLogo && <Logo className="form-logo" /> }
    <div className="auth-form">
      <Form
        fields={ fields }
        onSubmit={ onSubmit }
      />
    </div>
    <span className='form-prompt-wrapper'>
      <span className='form-prompt'>{ promptText } </span>
      <StyledLink
        to={ promptLink }
        text={ promptLinkText }
        className='form-prompt-link'
      />
    </span>
  </section>
);


export default AuthForm;