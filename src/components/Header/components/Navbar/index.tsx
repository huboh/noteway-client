import "./navbar.scss";
import { FC } from "react";

import Button from "../../../Button";

import * as constants from "../../../../constants";


const Home: FC = () => {
  return (
    <nav className="navbar">
      <Button.Link text="login" to={ constants.LOGIN_ROUTE } />
      <Button.Link text="signup" to={ constants.SIGNUP_ROUTE } />
    </nav>
  );
};


export {
  Home as default
};