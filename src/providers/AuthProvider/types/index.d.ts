import * as types from '../../../types';
import { OperationVariables, ApolloQueryResult } from '@apollo/client';

export interface UserState {
  user: types.User | null,
  isLoading: boolean,
  isAuthenticated: boolean,

  // methods
  logout?: () => any;
  login?: (props: LoginProps) => any;
  signup?: (props: SignupProps) => any;
  refreshSession?: (callback: () => any) => any;
}

export type UserAction =
  | { type: 'authenticate'; payload: any; }
  | { type: 'unAuthenticate'; payload?: unknown; };

export type Dispatcher = (value: UserAction) => void;
export type Refetch = (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;

// 

export interface LoginProps {
  onError: (err: any) => any;
  onSuccess: (user: any) => any;
  credentials: {
    email: string;
    password: string;
  };
}

export interface SignupProps {
  onError: (err: any) => any;
  onSuccess: (user: any) => any;
  credentials: {
    email: string;
    password: string;
    username?: string;
  };
}

export interface LogoutProps {
  onError: (err: any) => any;
  onSuccess: (user: any) => any;
}