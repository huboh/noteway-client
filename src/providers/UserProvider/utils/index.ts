import { useReducer } from 'react';
import { useQuery } from '@apollo/client';

import userReducer from './userReducer';
import { ME } from '../../../graphql/query';
import { TOKEN_KEY } from '../../../constants';

type User = any;

export interface UserState {
  user: User | null,
  isLoading: boolean,
  isLoggedIn: boolean,
}

export type UserAction =
  | { type: 'login-user'; payload: null; }
  | { type: 'logout-user'; payload: null; }
  | { type: 'fetch-error'; payload: unknown; }
  | { type: 'fetch-success'; payload: any; };

export const initialState: UserState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
};

export const useGetUser = (): UserState => {
  const token = sessionStorage.getItem(TOKEN_KEY);

  const [userDetails, dispatchAction] = useReducer(
    userReducer, initialState
  );

  const { loading: isLoading } = useQuery(ME, {
    onCompleted: (data) => dispatchAction({ type: 'fetch-success', payload: data }),
    onError: (error) => dispatchAction({ type: 'fetch-error', payload: error }),
  });

  if (!token) return {
    ...userDetails,
    isLoading: false,
    isLoggedIn: false,
  };

  return {
    ...userDetails,
    isLoading,
  };
};