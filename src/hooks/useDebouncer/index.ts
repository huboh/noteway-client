import { useRef, useEffect, useCallback } from "react";

export type Callback = (...args: any) => any;
export type UseDebouncer = <T extends Callback, U extends Parameters<T>>(callback: T, timeout?: number) => (...params: U) => void;

export const useDebouncer: UseDebouncer = (callback, timeout = 700) => {
  const timeoutRef = useRef(0);

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
  });

  return useCallback((...params) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...params), timeout) as any;
  },
    [callback, timeout]
  );
};

export {
  useDebouncer as default
};