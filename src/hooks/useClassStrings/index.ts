import { useMemo } from "react";
import { joinClassStrings } from "../../utils";

const useUserRole = (...classNames: (string | undefined)[]) => useMemo(() => joinClassStrings(...classNames), [...classNames]);

export {
  useUserRole as default
};