import { useContext } from "react";
import { DashboardContext } from "../../utils";

const useDashBoard = () => useContext(DashboardContext);

export {
  useDashBoard as default
};