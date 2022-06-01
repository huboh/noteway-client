import { gql } from '@apollo/client';


export const ME = gql`
  query Me {
    me {
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
`;