import "./header.scss";

import MainHeader from "./variants/MainHeader";
import AuthHeader from "./variants/AuthHeader";
import DashboardHeader from "./variants/DashboardHeader";


export default function Header() {
  return (
    <MainHeader />
  );
}

Header.Main = MainHeader;
Header.Auth = AuthHeader;
Header.Dashboard = DashboardHeader;