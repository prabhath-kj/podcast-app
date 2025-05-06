import { gql } from 'graphql-tag'

export const SAVE_SELECTION = gql`
  mutation SaveSelection($userId: String!, $selectedPodcastIds: [String!]!) {
    saveSelection(userId: $userId, selectedPodcastIds: $selectedPodcastIds)
  }
`

