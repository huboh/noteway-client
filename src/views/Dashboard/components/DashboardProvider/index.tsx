import { Context, FC } from "react";
import { DashboardContext } from "../../utils";

export interface DashboardProviderProps {
  data: typeof DashboardContext extends Context<infer U> ? U : never;
}

export const DashboardProvider: FC<DashboardProviderProps> = (props) => {
  const value = props.data;
  const children = props.children;

  return (
    <DashboardContext.Provider
      value={ value }
      children={ children }
    />
  );
};

export {
  DashboardProvider as default
};