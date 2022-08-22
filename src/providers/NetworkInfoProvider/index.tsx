import { FC, useState } from 'react';
import { useEventListener } from '../../hooks/useEventListener';
import { getNetworkStatus, navigatorConnection, NetworkInformationContext } from './utils';

const NetworkInfoProvider: FC = ({ children }) => {
  const [networkStatus, setNetWorkStatus] = useState(getNetworkStatus);

  useEventListener({ target: window, eventType: ['online', 'offline'], eventHandler: () => setNetWorkStatus(getNetworkStatus) });
  useEventListener({ target: navigatorConnection, eventType: ['change'], eventHandler: () => setNetWorkStatus(getNetworkStatus) });

  return (
    <NetworkInformationContext.Provider value={ networkStatus }>
      { children }
    </NetworkInformationContext.Provider>
  );
};

export {
  NetworkInfoProvider as default
};