import "./styles/header.scss";

import { FC } from "react";

// hooks
import useClassStrings from "../../../../hooks/useClassStrings";

// components
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => (
  <header className={ useClassStrings("dashboard-header", props.className) }>
    <SearchBar />
    <NavBar />
  </header>
);

export {
  Header as default
};