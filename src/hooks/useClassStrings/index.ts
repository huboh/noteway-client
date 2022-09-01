/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { joinClassStrings } from "../../utils";

export const useClassStrings = (...classNames: Parameters<typeof joinClassStrings>) => (
  useMemo(() => joinClassStrings(...classNames), [...classNames])
);

export {
  useClassStrings as default
};