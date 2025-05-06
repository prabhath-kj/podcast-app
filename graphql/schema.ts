// graphql/schema.ts
import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Podcast {
    id: ID!
    title: String!
    channelName: String!
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
