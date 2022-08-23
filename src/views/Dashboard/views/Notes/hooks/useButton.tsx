import { useCallback } from "react";
import { HeaderButton } from "../components/HeaderButton";

export const useButton = (display: boolean) => (
  useCallback(() => <HeaderButton display={ display } />, [display])
);

export {
  useButton as default
};