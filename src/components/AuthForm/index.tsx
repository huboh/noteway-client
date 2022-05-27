import { FC } from 'react';

import './auth-form.scss';
import Logo from '../Logo';
import StyledLink from '../StyledLink';

import Form from '../Form';
import * as types from '../Form/types';


export interface AuthFormProps extends types.FormProps {
  promptText: string;
  promptLink: string;
  promptLinkText: string;
  includeLogo?: boolean;
}


const AuthForm: FC<AuthFormProps> = (props) => {
  const { includeLogo = true, ...rest } = props;

  return (
    <section className='auth-form-wrapper'>
      { includeLogo && <Logo className="form-logo" /> }
      <div className="auth-form">
        <Form
          render={ rest.render }
          fields={ rest.fields }
          onSubmit={ rest.onSubmit }
          children={ props.children }
          autoComplete={ rest.autoComplete || 'off' }
        />
      </div>
      <span className='form-prompt-wrapper'>
        <span className='form-prompt'>{ rest.promptText } </span>
        <StyledLink
          to={ rest.promptLink }
          text={ rest.promptLinkText }
          className='form-prompt-link'
        />
      </span>
    </section>
  );
};


export default AuthForm;