import "./styles/dashboard-sidebar.scss";

import { FC } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { useLocation } from "react-router-dom";
import { mainMenu, accountMenu, defaultTab } from './utils';

// hooks
import useAuth from "../../../../hooks/useAuth";
import useClassStrings from "../../../../hooks/useClassStrings";

// components
import Logo from "../../../../components/Logo";
import Button from "../../../../components/Button";
import Sidebar from "../../../../components/Sidebar";
import ProfileCard from "../../../../components/ProfileCard";
import SidebarMenu from "../../../../components/Sidebar/components/SidebarMenu";
import SidebarHeader from "../../../../components/Sidebar/components/SidebarHeader";
import SidebarFooter from "../../../../components/Sidebar/components/SidebarFooter";

export interface DashboardSidebarProps {
  className?: string;
}

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const auth = useAuth();
  const activeTab = useLocation().pathname.split("/")[2] || defaultTab;
  const classString = useClassStrings("dashboard-sidebar", props.className);

  return (
    <Sidebar className={ classString } activeTab={ activeTab }>
      <SidebarHeader>
        <Logo className="logo" />
        <Button.Icon icon={ <TbMenu2 /> } />
      </SidebarHeader>

      <SidebarMenu title={ "menu" } menuItems={ mainMenu } />
      <SidebarMenu title={ "account" } menuItems={ accountMenu } />

      <SidebarFooter>
        { auth.user && <ProfileCard user={ auth.user } /> }
      </SidebarFooter>
    </Sidebar>
  );
};

export {
  DashboardSidebar as default
};