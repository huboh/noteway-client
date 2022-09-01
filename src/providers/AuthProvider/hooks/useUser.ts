import * as utils from '../utils';
import * as query from '../../../graphql/query';

// hooks
import { useReducer } from 'react';
import { useQuery } from '@apollo/client';

// functions
import authReducer from '../reducer';


const useUser = () => {
  const [authState, dispatchAction] = useReducer(authReducer, utils.initialState);

  const { loading, refetch } = useQuery(query.ME, {
    onCompleted: utils.onCompleted(dispatchAction),
    onError: utils.onError(dispatchAction),
  });

  // auth helper functions
  const login = utils.useLogin(dispatchAction, refetch);
  const signup = utils.useSignup(dispatchAction, refetch);
  const logout = utils.useLogout(dispatchAction, refetch);
  const refreshSession = utils.useRefreshSession(refetch);

  return {
    ...authState,
    isLoading: loading,
    login,
    signup,
    logout,
    refreshSession,
  };
};


export default useUser;