import { FC } from "react";

import './signup-view.scss';
import SignupForm from './components/SignupForm';


const Signup: FC = () => {
  return (
    <main className='view auth-view signup-view'>
      <section className='form-wrapper'>
        <SignupForm />
      </section>
    </main>
  );
};


export {
  Signup as default
};