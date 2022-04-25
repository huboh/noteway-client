import { FC } from 'react';

import UserProvider from './UserProvider';
import ApolloProvider from './ApolloProvider';
import NetworkInfoProvider from './NetworkInfoProvider';
import BrowserRouterProvider from './BrowserRouterProvider';

const combineProviders = (providers: FC[]) => providers.reduce(
  (Providers, Provider) => function AppProviders({ children }) {
    return (
      <Providers>
        <Provider>
          { children }
        </Provider>
      </Providers>
    );
  }
);

const AppProviders = combineProviders([
  ApolloProvider,
  BrowserRouterProvider,
  UserProvider,
  NetworkInfoProvider,
]);

export {
  AppProviders as default
};