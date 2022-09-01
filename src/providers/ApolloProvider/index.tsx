import { apolloClient } from "../../clients";

import { FC } from 'react';
import { ApolloProvider as Apollo } from "@apollo/client";

const ApolloProvider: FC = ({ children }) => (
  <Apollo client={ apolloClient }>
    { children }
  </Apollo>
);

export {
  ApolloProvider as default
};