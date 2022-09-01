import { useMemo } from "react";
import { getPageTitle } from "../utils";

export const usePageTitle = (noteCount?: number) => (
  useMemo(() => getPageTitle(Number(noteCount)), [noteCount])
);

export {
  usePageTitle as default
};