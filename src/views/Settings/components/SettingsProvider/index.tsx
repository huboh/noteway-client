import { Context, FC } from "react";
import { SettingsContext } from "../../utils";

export interface SettingsProviderProps {
  data: typeof SettingsContext extends Context<infer U> ? U : never;
}

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
  const value = props.data;
  const children = props.children;

  return (
    <SettingsContext.Provider
      value={ value }
      children={ children }
    />
  );
};

export {
  SettingsProvider as default
};