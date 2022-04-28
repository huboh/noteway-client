import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import AppProviders from '../../providers';

import * as constants from "../../constants";

// views
import Login from "../../views/Auth/Login";
import Signup from "../../views/Auth/Signup";
import Protected from "../../views/Protected";


const App: FC = () => {
  return (
    <AppProviders>
      <Routes>
        <Route path={ constants.SIGNUP_ROUTE } element={ <Signup /> } />
        <Route path={ constants.LOGIN_ROUTE } element={ <Login /> } />
        <Route path={ constants.HOME_ROUTE } element={ <Protected /> } />
      </Routes>
    </AppProviders>
  );
};


export {
  App as default
};