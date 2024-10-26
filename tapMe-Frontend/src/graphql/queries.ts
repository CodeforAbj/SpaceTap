import { gql } from "@apollo/client";

export const GET_PLAYER = gql`
  query GetPlayer($userId: String!) {
    getPlayer(userId: $userId) {
      userId
      points
    }
  }
`;
