// pages/api/graphql.ts
import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { connectToDatabase } from "@/lib/db";

const server = new ApolloServer({ typeDefs, resolvers });

export const config = { api: { bodyParser: false } };

const startServer = server.start();

export default async function handler(req: any, res: any) {
    await connectToDatabase();
    await startServer;
    return server.createHandler({ path: "/api/graphql" })(req, res);
}
