import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const token = sessionStorage.getItem('token');
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiEndpoint,
    headers: { "Authorization": `Bearer ${token}` },
  }),
});

export {
  apolloClient as default
};