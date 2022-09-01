import { createContext } from 'react';

export interface NewtworkInfo {
  isOnline: boolean;
  networkSpeed?: string;
  networkCondition: 'online' | 'offline';
  networkType?: NetworkInformation['type'];
}

export const navigatorConnection = navigator.connection ?? (
  (navigator as any).mozConnection ?? (navigator as any).webkitConnection
);

export const getNetworkStatus = (): NewtworkInfo => ({
  networkCondition: navigator.onLine ? 'online' : 'offline',
  networkSpeed: (navigatorConnection as any)?.effectiveType,
  networkType: navigatorConnection?.type,
  isOnline: navigator.onLine,
});

export const NetworkInformationContext = createContext(getNetworkStatus());