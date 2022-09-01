import { Layout } from "../../../types";
import { FC, Dispatch, SetStateAction } from "react";

export interface State {
  HeaderButton: FC;
  DefaultButton: FC;
  useHeaderButton: (button: FC) => void;

  viewLayout: Layout;
  setViewLayout: (layout: Layout) => void;
}

export type Setter = Dispatch<SetStateAction<State>>;