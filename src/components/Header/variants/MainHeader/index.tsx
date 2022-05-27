import "../../header.scss";
import { FC } from "react";

import Logo from "../../../Logo";
import Navbar from "../../components/Navbar";


const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};


export {
  Header as default
};