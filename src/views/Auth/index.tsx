import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import * as routes from '../../constants/routes';

import './auth.scss';
import Header from '../../components/Header';

// forms
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';


const Auth: FC = () => {
  const path = useLocation().pathname;
  const viewMap = new Map([
    [routes.LOGIN, <LoginForm />],
    [routes.SIGNUP, <SignupForm />],
    [routes.FORGOT_PASSWORD, <ForgotPasswordForm />],
  ]);

  return (
    <>
      <Header.Auth />
      <main className='view auth-view'>

        <section className='child-wrapper'>
          { viewMap.get(path) }
        </section>
      </main>
    </>
  );
};


export default Auth;