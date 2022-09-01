import "../../styles/navbar.scss";

import { FC } from "react";

// hooks
import useDashBoard from "../../../../hooks/useDashboard";

// components
import ThemeSwitcher from './components/ThemeSwitcher';

const NavBar: FC = () => {
  const { HeaderButton } = useDashBoard();

  return (
    <nav className="dashboard-navbar">
      <HeaderButton />
      <ThemeSwitcher />
    </nav>
  );
};

export {
  NavBar as default
};