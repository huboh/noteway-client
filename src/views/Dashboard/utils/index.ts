import { Layout } from "../../../types";
import { State, Setter } from "../types";
import { DefaultLayout } from "../../../constants";
import { FC, createContext, useEffect } from "react";

export const dashboardState: State = {
  HeaderButton: () => null,
  DefaultButton: () => null,
  useHeaderButton: () => null,

  viewLayout: DefaultLayout,
  setViewLayout: () => null,
};

export const DashboardContext = createContext<State>(dashboardState);

export const getFuntions = (setter: Setter, state: State) => {
  return {
    setViewLayout: (layout: Layout) => setter(s => ({ ...s, viewLayout: layout })),

    useHeaderButton: (HeaderButton: FC) => {
      useEffect(() => {

        setter(s => ({ ...s, HeaderButton }));

        return () => {
          setter(s => ({ ...s, HeaderButton: state.DefaultButton }));
        };
      }, [HeaderButton]);
    }
  };
};