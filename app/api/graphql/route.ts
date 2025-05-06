// app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create the handler for the API route
const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDatabase();
    return {
      req,
      res,
    };
  },
});

// Named exports for HTTP methods
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return handler(req, res);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return handler(req, res);
}
