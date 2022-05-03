import { FC } from "react";

import './login-view.scss';
import LoginForm from './components/LoginForm';


const Login: FC = () => (
  <main className='view auth-view login-view'>
    <section className='form-wrapper'>
      <LoginForm />
    </section>
  </main>
);


export {
  Login as default
};