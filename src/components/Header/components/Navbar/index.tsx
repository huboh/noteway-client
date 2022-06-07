import "./navbar.scss";
import { FC } from "react";

import * as routes from "../../../../constants/routes";

// components
import Button from "../../../Button";
import LoginIcon from "../../../Icons/LoginIcon";
import SignupIcon from "../../../Icons/SignupIcon";


const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <Button.Link text="login" to={ routes.LOGIN } linkStyle="transparent" icon={ <LoginIcon /> } />
      <Button.Link text="signup" to={ routes.SIGNUP } icon={ <SignupIcon /> } />
    </nav>
  );
};


export {
  Navbar as default
};