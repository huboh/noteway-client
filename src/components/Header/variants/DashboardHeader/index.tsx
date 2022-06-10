import "../../header.scss";
import "./dashboard-header.scss";
import { FC } from "react";

// components
import SearchBar from "../../components/SearchBar";
import DashboardNavbar from "../../components/DashboardNavbar";

export interface DashboardHeaderProps { }


const DashboardHeader: FC<DashboardHeaderProps> = (props) => (
  <header className="header dashboard-header">
    <SearchBar />
    <DashboardNavbar />
  </header>
);


export {
  DashboardHeader as default
};