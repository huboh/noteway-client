import { FC, Suspense } from "react";

import Loader from "../Loader";
import Router from "../Router";
import AppProviders from '../../providers';
import ErrorBoundary from "../ErrorBoundary";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <Suspense fallback={ <Loader /> }>
          <Router />
        </Suspense>
      </AppProviders>
    </ErrorBoundary>
  );
};

export {
  App as default
};