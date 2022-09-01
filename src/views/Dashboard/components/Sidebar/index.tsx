import "./styles/dashboard-sidebar.scss";

import { FC } from 'react';
import { mainMenu, accountMenu, defaultTab } from './utils';

// hooks
import { useLocation } from "react-router-dom";
import { useClassStrings } from "../../../../hooks/useClassStrings";

// components
import Sidebar from "../../../../components/Sidebar";
import SiteIcon from "../../../../components/Logo/SiteIcon";
import ProfileCard from "../../../../components/ProfileCard";

export interface DashboardSidebarProps {
  className?: string;
}

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const activeTab = useLocation().pathname.split("/")[2] || defaultTab;
  const classString = useClassStrings("dashboard-sidebar", props.className);

  return (
    <Sidebar className={ classString } activeTab={ activeTab }>
      <Sidebar.Header>
        <SiteIcon />
        <ProfileCard />
      </Sidebar.Header>

      <Sidebar.Menu title={ "menu" } menuItems={ mainMenu } />
      <Sidebar.Menu title={ "account" } menuItems={ accountMenu } />
    </Sidebar>
  );
};

export {
  DashboardSidebar as default
};