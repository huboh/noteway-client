import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import * as constants from '../../constants';

import './auth.scss';
import Header from '../../components/Header';

// forms
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';


const Auth: FC = () => {
  const path = useLocation().pathname;
  const viewMap = new Map([
    [constants.LOGIN_ROUTE, <LoginForm />],
    [constants.SIGNUP_ROUTE, <SignupForm />],
    [constants.FORGOT_PASSWORD_ROUTE, <ForgotPasswordForm />],
  ]);

  return (
    <main className='view auth-view signup-view'>
      <Header.Auth />

      <section className='child-wrapper'>
        { viewMap.get(path) }
      </section>
    </main>
  );
};


export default Auth;