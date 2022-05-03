import "./logo.scss";
import { FC } from "react";
import { Link } from 'react-router-dom';

import logo from "./logo-Itoma.png";
import * as constants from "../../constants";

export interface LogoProps {
  className?: string;
  redirectLink?: string;
}


const Logo: FC<LogoProps> = ({ redirectLink, className }) => (
  <Link to={ redirectLink || constants.HOME_ROUTE } className={ `logo-wrapper ${className || ''}`.trim() }>
    <img className="logo" alt="logo" src={ logo } />
  </Link>
);


export {
  Logo as default
};