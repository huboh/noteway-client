import "../../styles/sidebar-menu-item.scss";

import { Link } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import { joinClassStrings } from "../../../../../../utils";

// hooks
import useSidebar from "../../../../hooks/useSidebar";

export interface SidebarMenuItemProps {
  onItemClick?: (tabId: string) => any;
  icon: ReactElement;
  text: string;
  to: string;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = (props) => {
  const sidebar = useSidebar();
  const activeClass = sidebar.activeTab === props.to ? "active" : "";
  const classString = joinClassStrings("sidebar-menu-item", activeClass);

  const onCLickHandler = () => {
    sidebar.setActiveTab?.(props.to);
    props.onItemClick?.(props.to);
  };

  return (
    <li className={ classString } onClick={ onCLickHandler }>
      <Link className="menu-link" to={ props.to } >
        <span className="icon">{ props.icon }</span>
        <span className='text'>{ props.text }</span>
      </Link>
    </li>
  );
};


export default SidebarMenuItem;