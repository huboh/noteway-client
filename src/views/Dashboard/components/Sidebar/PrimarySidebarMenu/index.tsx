import { FC } from 'react';

// components
import SidebarMenu from "../SidebarMenu";

// hooks
import * as routes from '../../../../../constants/routes';

// icons
import { TbNotes, TbTags } from 'react-icons/tb';
import { BiArchive, BiTrash } from 'react-icons/bi';

export interface PrimarySidebarMenuProps { }


const PrimarySidebarMenu: FC<PrimarySidebarMenuProps> = () => {
  const mainMenuItems = [
    { text: "notes", icon: <TbNotes />, to: routes.NOTES, },
    { text: "tags", icon: <TbTags />, to: routes.TAGS, },
    { text: "archived notes", icon: <BiArchive />, to: routes.ARCHIVED_NOTES, },
    { text: "trash", icon: <BiTrash />, to: routes.TRASH, },
  ];

  return (
    <SidebarMenu menuItems={ mainMenuItems } />
  );
};


export default PrimarySidebarMenu;