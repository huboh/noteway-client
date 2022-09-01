import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation UserLogin($loginCredentials: UserLoginInput) {
    userLogin(loginCredentials: $loginCredentials) {
      authToken
      user {
        userId
        name
        email
        username
        createdAt
        avatarUrl
        updatedAt
        isDeactivated
        isEmailVerified
        preferences {
          theme
          sortNoteBy
        }
        notes {
          totalNodes
          pageInfo {
            total
          }
        }
        archivedNotes {
          totalNodes
        }
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation UserSignup($signupCredentials: UserSignupInput) {
    userSignup(signupCredentials: $signupCredentials) {
      authToken
      user {
        userId
        name
        email
        username
        createdAt
        avatarUrl
        updatedAt
        isDeactivated
        isEmailVerified
        preferences {
          theme
          sortNoteBy
        }
        notes {
          totalNodes
          pageInfo {
            total
          }
        }
        archivedNotes {
          totalNodes
        }
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation UserLogout {
    userLogout {
      success
    }
  }
`;