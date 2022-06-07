import { FC } from 'react';

// components
import SidebarMenu from "../SidebarMenu";

// hooks
import * as routes from '../../../../../constants/routes';

// icons
import { MdSettings } from 'react-icons/md';

export interface SecondarySidebarMenuProps { }


const SecondarySidebarMenu: FC<SecondarySidebarMenuProps> = () => {
  const mainMenuItems = [
    { text: "settings", icon: <MdSettings />, to: routes.SETTINGS, },
  ];

  return (
    <SidebarMenu menuItems={ mainMenuItems } />
  );
};


export default SecondarySidebarMenu;