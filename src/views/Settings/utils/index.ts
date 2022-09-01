import { createContext } from "react";
import { SettingsState } from "../types";

export const goBack = () => window.history.back();

export const SettingsContext = createContext(getSettingsDefaultState());

export function getSettingsDefaultState(): SettingsState {
  return {

  };
};