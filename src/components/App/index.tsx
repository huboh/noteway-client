import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../Loader";
import AppProviders from '../../providers';

import * as constants from "../../constants";


// views
const Login = lazy(() => import("../../views/Auth/Login"));
const Signup = lazy(() => import("../../views/Auth/Signup"));
const Protected = lazy(() => import("../../views/Protected"));

const App: FC = () => {
  return (
    <AppProviders>
      <Suspense fallback={ <Loader /> }>
        <Routes>
          <Route path={ constants.SIGNUP_ROUTE } element={ <Signup /> } />
          <Route path={ constants.LOGIN_ROUTE } element={ <Login /> } />
          <Route path={ constants.HOME_ROUTE } element={ <Protected /> } />
        </Routes>
      </Suspense>
    </AppProviders>
  );
};


export {
  App as default
};