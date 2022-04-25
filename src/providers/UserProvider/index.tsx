import { FC, createContext } from 'react';
import { initialState, useGetUser } from './utils';

const UserContext = createContext(initialState);

const UserProvider: FC = ({ children }) => {
  const userDetails = useGetUser();

  return (
    <UserContext.Provider value={ userDetails }>
      { children }
    </UserContext.Provider>
  );
};


export {
  UserProvider as default,
  UserContext
};