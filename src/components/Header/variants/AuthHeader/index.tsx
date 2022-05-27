import "../../header.scss";
import { FC, ReactNode } from "react";

import Logo from "../../../Logo";

export interface AuthHeaderProps {
  HeaderNavigation?: ReactNode;
}


const AuthHeader: FC<AuthHeaderProps> = (props) => (
  <header className="header">
    <Logo />
    { props.HeaderNavigation }
  </header>
);


export {
  AuthHeader as default
};