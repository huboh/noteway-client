import "./sidebar-menu.scss";
import { FC } from 'react';

// components
import SidebarMenuItem, { SidebarMenuItemProps } from './SidebarMenuItem';

export interface SidebarMenuProps {
  menuItems: SidebarMenuItemProps[];
  onItemClick?: (tabId: string) => any;
}


const SidebarMenu: FC<SidebarMenuProps> = (props) => {
  const { onItemClick } = props;

  return (
    <ul className="sidebar-menu">
      { props.menuItems?.map(menuItem => (
        <SidebarMenuItem
          { ...menuItem } key={ menuItem.text } onItemClick={ onItemClick }
        />
      )) }
    </ul>
  );
};


export default SidebarMenu;