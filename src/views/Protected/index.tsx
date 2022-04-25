import { FC } from "react";
// import { useLocation } from 'react-router-dom';

import useUser from "../../hooks/useUser";

import Home from "../Home";
import Dashboard from "../Dashboard";


const Protected: FC = () => {
  // const { pathname } = useLocation();
  const { isLoggedIn, isLoading } = useUser();
  // const isRequestingNote = pathname.includes('notes/');

  if (isLoading) return null;
  if (isLoggedIn) return <Dashboard />;

  else return <Home />;
};


export {
  Protected as default
};