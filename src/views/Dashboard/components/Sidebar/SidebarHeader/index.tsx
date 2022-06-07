import "./sidebar-header.scss";
import { FC } from 'react';

// icons
import { TbMenu2 } from 'react-icons/tb';

// components
import Logo from '../../../../../components/Logo';
import Button from '../../../../../components/Button';

export interface SidebarHeaderProps { }


const SidebarHeader: FC<SidebarHeaderProps> = () => (
  <div className="sidebar-header">
    <Logo className="sidebar-logo" />
    <Button.Icon icon={ <TbMenu2 /> } onClick={ () => { } } />
  </div>
);


export default SidebarHeader;