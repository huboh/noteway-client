import * as types from '../types';
import * as constants from '../../../constants';

type AuthReducer = (state: types.UserState, action: types.UserAction) => types.UserState;

const authReducer: AuthReducer = (state, action) => {
  const type = action.type;

  switch (type) {
    case 'unAuthenticate': {
      sessionStorage.removeItem(constants.TOKEN_KEY);

      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    }

    case 'authenticate': {
      const user = action?.payload;

      return {
        ...state,
        isAuthenticated: Boolean(user),
        isLoading: false,
        user,
      };
    }

    default: return state;
  }
};

export default authReducer;