import { gql } from '@apollo/client';


export const ME = gql`
  query Me {
    me {
      id
      userId
      name
      email
      username
      createdAt
      updatedAt
      isDeactivated
      isEmailVerified
    }
  }
`;