import { FC } from 'react';

import AuthProvider from './AuthProvider';
import ApolloProvider from './ApolloProvider';
import NetworkInfoProvider from './NetworkInfoProvider';
import BrowserRouterProvider from './BrowserRouterProvider';
import ToastNotificationProvider from './ToastNotificationProvider';

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
  AuthProvider,
  NetworkInfoProvider,
  ToastNotificationProvider,
]);

export {
  AppProviders as default
};