import * as dotenv from "dotenv";
dotenv.config();

import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.js";

const SECRET_KEY = process.env.SECRET_KEY;
// For Security purposes

const yoga = createYoga({
  schema,
  context: ({ request }) => {
    const authHeader = request.headers.get("authorization");

    // Check if the Authorization header exists and matches the secret key
    if (authHeader !== `Bearer ${SECRET_KEY}`) {
      throw new Error("Not Authorized");
    }

    return {}; // Return an empty context object or add any other properties you need.
  },
});

const server = createServer(yoga);

server.listen(process.env.SECRET_KEY, 4000, () => {
  console.info("Graphql Server is running ");
});
