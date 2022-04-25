
export const isPromise = (value: any): value is Promise<any> => (
  Boolean(value && typeof value.then === "function")
);