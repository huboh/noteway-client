import * as types from '../types';
import * as constants from '../../../constants';

export interface OnSignupCompletedProps {
  dispatcher: types.Dispatcher;
  onSuccess: (user: any) => any;
  onError: (err: any) => any;
  refreshSession: any;
}

export interface OnSignupErrorProps {
  dispatcher: types.Dispatcher;
  onError: (err: any) => any;
}

export const onSignupError = (props: OnSignupErrorProps) => (error: unknown) => {
  props.dispatcher({
    type: 'unAuthenticate',
    payload: error,
  });

  props.onError(
    error
  );
};

export const onSignupCompleted = (props: OnSignupCompletedProps) => async (data: any) => {
  const user = data.userSignup.user;
  const authToken = data.userSignup.authToken;

  if (!user || !authToken) {
    props.dispatcher({
      type: 'unAuthenticate',
      payload: new Error('authentication error'),
    });

    return (
      props.onError?.('authentication error')
    );
  };

  try {
    sessionStorage.setItem(constants.TOKEN_KEY, authToken);

    props.dispatcher({
      type: 'authenticate',
      payload: user
    });

    await props.refreshSession?.();

    props.onSuccess(
      user
    );

  } catch (error) {

    props.dispatcher({
      type: 'unAuthenticate',
      payload: error,
    });
  }
};