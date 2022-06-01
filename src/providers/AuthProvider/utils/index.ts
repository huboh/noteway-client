import * as types from '../types';
import * as query from '../../../graphql/query';
import * as mutation from '../../../graphql/mutation';
import * as loginCallbacks from '../callbacks/login';
import * as signupCallbacks from '../callbacks/signup';

import { useCallback } from 'react';
import useMutation from '../../../hooks/useMutation';

// 

export const onError = (dispatcher: types.Dispatcher) => (error: unknown) => {
  dispatcher({ type: 'unAuthenticate', payload: error });
};

export const onCompleted = (dispatcher: types.Dispatcher) => (data: any) => {
  const user = ('me' in data) ? data.me : data;

  dispatcher({
    type: Boolean(user) ? 'authenticate' : 'unAuthenticate', payload: user
  });
};

// 

export const useLogin = (dispatcher: types.Dispatcher, refreshSession: types.Refetch) => {
  const mutate = useMutation(mutation.LOGIN, { fetchPolicy: 'no-cache' })[0];

  const login = ({ onSuccess, onError, credentials }: types.LoginProps) => mutate({
    awaitRefetchQueries: true,
    refetchQueries: [query.ME],

    variables: {
      loginCredentials: {
        email: credentials.email,
        password: credentials.password
      }
    },

    onError: loginCallbacks.onLoginError({
      dispatcher,
      onError
    }),

    onCompleted: loginCallbacks.onLoginCompleted({
      dispatcher,
      onError,
      onSuccess,
      refreshSession
    })
  });

  return useCallback(login, [
    dispatcher, mutate, refreshSession
  ]);
};

export const useSignup = (dispatcher: types.Dispatcher, refreshSession: types.Refetch) => {
  const mutate = useMutation(mutation.SIGNUP, { fetchPolicy: 'no-cache' })[0];

  const signup = ({ onSuccess, onError, credentials }: types.SignupProps) => mutate({
    awaitRefetchQueries: true,
    refetchQueries: [query.ME],

    variables: {
      signupCredentials: {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      }
    },

    onError: signupCallbacks.onSignupError({
      dispatcher,
      onError
    }),

    onCompleted: signupCallbacks.onSignupCompleted({
      dispatcher,
      onError,
      onSuccess,
      refreshSession
    })
  });

  return useCallback(signup, [
    dispatcher, mutate, refreshSession
  ]);
};

export const useLogout = (dispatcher: types.Dispatcher, refreshSession: types.Refetch) => {
  const mutate = useMutation(mutation.LOGOUT, { fetchPolicy: 'no-cache' })[0];

  const logout = ({ onSuccess, onError }: types.LogoutProps = ({}) as any) => {
    dispatcher({
      type: 'unAuthenticate',
      payload: null
    });

    mutate({
      awaitRefetchQueries: true,
      refetchQueries: [query.ME],

      onError: loginCallbacks.onLoginError({
        dispatcher,
        onError
      }),

      onCompleted: loginCallbacks.onLoginCompleted({
        dispatcher,
        onError,
        onSuccess,
        refreshSession
      })
    });
  };

  return useCallback(logout, [
    dispatcher, mutate, refreshSession
  ]);
};

export const useRefreshSession = (refreshSession: types.Refetch) => {
  return useCallback((callback: () => any) => refreshSession().then(callback), [
    refreshSession
  ]);
};

export const initialState: types.UserState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};