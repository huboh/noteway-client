import "../../header.scss";
import { FC, ReactNode } from "react";

import Logo from "../../../Logo";

export interface DashboardHeaderProps {
  HeaderNavigation?: ReactNode;
}


const DashboardHeader: FC<DashboardHeaderProps> = (props) => (
  <header className="header">
    <Logo />
    { props.HeaderNavigation }
  </header>
);


export {
  DashboardHeader as default
};