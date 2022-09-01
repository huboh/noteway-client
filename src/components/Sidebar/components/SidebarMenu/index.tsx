import "./styles/sidebar-menu.scss";

import { FC } from 'react';
import { SidebarMenuProps } from "../../types";

// hooks
import useClassStrings from "../../../../hooks/useClassStrings";

// components
import SidebarMenuItem from './components/SidebarMenuItem';
import SidebarMenuTitle from "./components/SidebarMenuTitle";

const SidebarMenu: FC<SidebarMenuProps> = (props) => {
  const classString = useClassStrings("sidebar-menu", props.className);
  const listMenuItems = props.menuItems?.map((menuItem) => (
    <SidebarMenuItem { ...menuItem } key={ menuItem.text } onItemClick={ props.onItemClick } />
  ));

  return (
    <div className={ classString }>
      <SidebarMenuTitle title={ props.title } />
      <ul children={ listMenuItems } className="sidebar-menu-wrapper" />
    </div>
  );
};

export {
  SidebarMenu as default
};