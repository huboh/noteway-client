export const isPromise = <T = any>(value: T): value is T => (
  Boolean(value && typeof (value as any).then === "function")
);

export const joinClassStrings = (...classNames: (string | undefined)[]) => (
  classNames.reduce((a, b) => `${(a || "").trim()} ${(b || "").trim()}`.trim(), "")
);

export const formatDate = (date: Date) => {
  const isAm = date.getHours() < 12;
  const hours12 = (date.getHours() % 12) || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours12}:${minutes} ${isAm ? "AM" : "PM"}, ${date.toDateString()}`;
};