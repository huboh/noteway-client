export const isPromise = <T = any>(value: T): value is T => (
  Boolean(value && typeof (value as any).then === "function")
);

export const joinClassStrings = (...classNames: (string | undefined)[]) => (
  classNames.reduce((a, b) => `${(a || "").trim()} ${(b || "").trim()}`.trim(), "")
);