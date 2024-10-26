import { gql } from "@apollo/client";

export const SAVE_PLAYER = gql`
  mutation SavePlayer($userId: String!, $points: Int!) {
    savePlayer(userId: $userId, points: $points) {
      userId
      points
    }
  }
`;
