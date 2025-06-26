import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.example.com/graphql', // I will replace this with my GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;