export const timeMap = {
  day: 24 * (60 * (60 * 1000)),
  days: 24 * (60 * (60 * 1000)),
  hour: 60 * (60 * 1000),
  hours: 60 * (60 * 1000),
  minute: 60 * 1000,
  minutes: 60 * 1000,
};

export type TimeMapKey = keyof typeof timeMap;

export const getDuration = (strings: string[]) => {
  const key = (strings.find((s) => s in timeMap) || "minute") as TimeMapKey;

  return timeMap[key];
};