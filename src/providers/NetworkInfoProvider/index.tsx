import { createContext, FC, useState } from 'react';
import { getNetworkStatus, navigatorConnection } from './utils';
import useEventListener from '../../hooks/useEventListener';


const NetworkInformationContext = createContext(getNetworkStatus());

const NetworkInfoProvider: FC = ({ children }) => {
  const [networkStatus, setNetWorkStatus] = useState(getNetworkStatus);

  useEventListener({
    target: window,
    eventType: ['online', 'offline'],
    eventHandler: () => setNetWorkStatus(getNetworkStatus)
  });

  useEventListener({
    target: navigatorConnection,
    eventType: 'change',
    eventHandler: () => setNetWorkStatus(getNetworkStatus)
  });

  return (
    <NetworkInformationContext.Provider value={ networkStatus }>
      { children }
    </NetworkInformationContext.Provider>
  );
};


export default NetworkInfoProvider;