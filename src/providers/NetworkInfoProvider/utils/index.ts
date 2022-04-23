export interface NewtworkInfo {
  isOnline: boolean;
  networkSpeed: string | undefined;
  networkCondition: 'online' | 'offline';
  networkType: NetworkInformation['type'] | undefined;
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