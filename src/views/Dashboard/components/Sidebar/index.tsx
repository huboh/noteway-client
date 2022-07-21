import "./styles/dashboard-sidebar.scss";

import { FC } from 'react';
import { useLocation } from "react-router-dom";
import * as routes from '../../../../constants/routes';

// icons
import { MdSettings } from 'react-icons/md';
import { BiArchive, BiTrash } from 'react-icons/bi';
import { TbNotes, TbTags, TbMenu2 } from 'react-icons/tb';

// components
import Logo from "../../../../components/Logo";
import Button from "../../../../components/Button";
import Sidebar from "../../../../components/Sidebar";
import SidebarMenu from "../../../../components/Sidebar/components/SidebarMenu";
import SidebarHeader from "../../../../components/Sidebar/components/SidebarHeader";

const accountMenu = [
  { text: "settings", icon: <MdSettings />, to: routes.SETTINGS, },
];

const mainMenu = [
  { text: "notes", icon: <TbNotes />, to: routes.NOTES, },
  { text: "tags", icon: <TbTags />, to: routes.TAGS, },
  { text: "archived notes", icon: <BiArchive />, to: routes.ARCHIVED_NOTES, },
  { text: "trash", icon: <BiTrash />, to: routes.TRASH, },
];

const DashboardSidebar: FC = () => {
  const activeTab = useLocation().pathname.split("/")[1] || "notes";

  return (
    <Sidebar className={ "dashboard-sidebar" } activeTab={ activeTab }>
      <SidebarHeader className="header">
        <Logo className="logo" />
        <Button.Icon icon={ <TbMenu2 /> } onClick={ () => { } } />
      </SidebarHeader>
      <SidebarMenu title={ "menu" } menuItems={ mainMenu } />
      <SidebarMenu title={ "account" } menuItems={ accountMenu } />
    </Sidebar>
  );
};

export {
  DashboardSidebar as default
};