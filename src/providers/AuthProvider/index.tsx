import * as react from 'react';
import * as utils from './utils';

import useUser from './hooks/useUser';


const AuthContext = react.createContext(utils.initialState);

const AuthProvider: react.FC = ({ children }) => {
  const data = useUser();

  return (
    <AuthContext.Provider value={ data }>
      { children }
    </AuthContext.Provider>
  );
};


export {
  AuthProvider as default,
  AuthContext
};