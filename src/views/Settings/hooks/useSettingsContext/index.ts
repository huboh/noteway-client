import { useContext } from "react";
import { SettingsContext } from "../../utils";

export const useSettingsContext = () => useContext(
  SettingsContext
);

export {
  useSettingsContext as default
};