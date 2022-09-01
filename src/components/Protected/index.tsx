import { LOGIN } from '../../constants/routes';
import { FC, Fragment } from "react";
import { useLocation, Navigate } from 'react-router-dom';

// hooks
import useAuth from '../../hooks/useAuth';

// components
import LoadingScreen from '../Loader';

const Protected: FC = ({ children }) => {
  const auth = useAuth();
  const currentLocation = useLocation();

  if (auth.isLoading) return <LoadingScreen />;
  if (!auth.isAuthenticated) return <Navigate to={ LOGIN } state={ { from: currentLocation } } replace />;

  return (
    <Fragment children={ children } />
  );
};

export {
  Protected as default
};