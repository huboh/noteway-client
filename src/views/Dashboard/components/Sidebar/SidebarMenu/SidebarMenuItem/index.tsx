import "./sidebar-menu-item.scss";
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import useSidebar from "../../../../hooks/useSidebar";

export interface SidebarMenuItemProps {
  onItemClick?: (tabId: string) => any;
  icon: ReactElement;
  text: string;
  to: string;
}


const SidebarMenuItem: FC<SidebarMenuItemProps> = (props) => {
  const { activeTab, setActiveTab } = useSidebar();
  const { onItemClick } = props;

  const isActive = activeTab === props.to;

  const onCLickHandler = () => {
    setActiveTab?.(props.to);
    onItemClick?.(props.to);
  };

  return (
    <li className={ `sidebar-menu-item ${isActive ? 'active' : ''}`.trim() } onClick={ onCLickHandler }>
      <Link className={ `menu-link` } to={ props.to } >
        <span className="icon-wrapper">
          { props.icon }
        </span>
        <span className='text-wrapper'>
          { props.text }
        </span>
      </Link>
    </li>
  );
};


export default SidebarMenuItem;