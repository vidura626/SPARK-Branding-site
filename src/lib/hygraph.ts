import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_API_URL;

if (!endpoint) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_API_URL is not defined in environment variables. Please check your .env.local file.');
}

/**
 * A pre-configured GraphQL client for making requests to the Hygraph API.
 */
export const hygraphClient = new GraphQLClient(endpoint);
