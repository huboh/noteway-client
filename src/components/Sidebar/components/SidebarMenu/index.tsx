import "./styles/sidebar-menu.scss";

import { FC } from 'react';
import { joinClassStrings } from "../../../../utils";

import SidebarMenuItem, { SidebarMenuItemProps } from './components/SidebarMenuItem';
import SidebarMenuTitle, { SidebarMenuTitleProps } from "./components/SidebarMenuTitle";

export interface SidebarMenuProps extends SidebarMenuTitleProps {
  className?: string;
  menuItems: SidebarMenuItemProps[];
  onItemClick?: (tabId: string) => any;
}

const SidebarMenu: FC<SidebarMenuProps> = (props) => {
  const classString = joinClassStrings("sidebar-menu", props.className);

  return (
    <div className={ classString }>
      <SidebarMenuTitle title={ props.title } />
      <ul className="sidebar-menu-wrapper">
        { props.menuItems?.map(menuItem => (
          <SidebarMenuItem { ...menuItem } key={ menuItem.text } onItemClick={ props.onItemClick } />
        )) }
      </ul>
    </div>
  );
};

export {
  SidebarMenu as default
};