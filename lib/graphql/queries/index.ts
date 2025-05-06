import { gql } from 'graphql-request';

export const GET_PODCASTS = gql`
  query GetPodcasts {
    podcasts {
      id
      title
      channelName
      image
    }
  }
`;



export const GET_USER_SELECTION = gql`
  query GetUserSelection($userId: String!) {
    userSelection(userId: $userId) {
      id
      title
      channelName
      image
    }
  }
`;
