import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import AppProviders from '../../providers';

// views
import Login from "../../views/Auth/Login";
import Signup from "../../views/Auth/Signup";
import Protected from "../../views/Protected";


const App: FC = () => {
  return (
    <AppProviders>
      <Routes>
        <Route path='/' element={ <Protected /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </AppProviders>
  );
};


export {
  App as default
};