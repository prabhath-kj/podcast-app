import { gql } from 'graphql-request';

export const GET_PODCASTS = gql`
  query GetPodcasts {
    podcasts {
      _id
      title
      channel
      image
    }
  }
`;



export const GET_USER_SELECTION = gql`
  query GetUserSelection($userId: String!) {
    userSelection(userId: $userId) {
      _id
      title
      channel
      image
    }
  }
`;
