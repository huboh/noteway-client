export const isPromise = <T = any>(value: T): value is T => (
  Boolean(value && typeof (value as any).then === "function")
);