import { UserState, UserAction } from ".";
import { TOKEN_KEY } from "../../../constants";


const userReducer = (state: UserState, action: UserAction): UserState => {
  const type = action.type;

  switch (type) {

    case 'fetch-error': {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        user: null,
      };
    }

    case 'fetch-success': {
      const user = action?.payload?.me;

      return {
        ...state,
        isLoggedIn: Boolean(user),
        isLoading: false,
        user,
      };
    }

    case 'logout-user': {
      sessionStorage.removeItem(TOKEN_KEY);

      return {
        user: null,
        isLoading: false,
        isLoggedIn: false,
      };
    }

    default: return state;
  }
};

export default userReducer;