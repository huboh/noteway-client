import "./logo.scss";
import { FC } from "react";
import logo from "./logo.svg";


export interface LogoProps {
  redirectLink?: string;
}


const Logo: FC<LogoProps> = ({ redirectLink }) => {
  return (
    <a href={ redirectLink || "/" } className="logo-wrapper">
      <img className="logo" src={ logo } alt="" />
    </a>
  );
};


export {
  Logo as default
};