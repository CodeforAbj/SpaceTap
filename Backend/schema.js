import { createSchema } from "graphql-yoga";
import supabase from "./dbConfig/supabase.js";
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type PlayerData {
      userId: String!
      points: Int
    }

    type Query {
      getPlayer(userId: String!): PlayerData
    }

    type Mutation {
      savePlayer(userId: String!, points: Int!): PlayerData
    }
  `,
  resolvers: {
    Query: {
      getPlayer: async (_, args) => {
        const { data, error } = await supabase
          .from("SpaceTapData")
          .select("*")
          .eq("userId", args.userId)
          .single();
        if (error) throw new Error(error.message);
        return data;
      },
    },
    Mutation: {
      savePlayer: async (_, args) => {
        const { data, error } = await supabase
          .from("SpaceTapData")
          .upsert(
            { userId: args.userId, points: args.points },
            { onConflict: "userId" }
          );
        if (error) throw new Error(error.message);
        if (data) {
          return data[0];
        } else {
          return undefined;
        }
      },
    },
  },
});
