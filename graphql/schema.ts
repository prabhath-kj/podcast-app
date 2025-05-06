import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Podcast {
    _id: ID!
    title: String!
    channel: String!
    image: String!
  }

  type Query {
    podcasts: [Podcast!]!
    userSelection(userId: String!): [Podcast!]!
  }

  type Mutation {
    saveSelection(userId: String!, selectedPodcastIds: [String!]!): Boolean
  }
`;
