import "../../styles/sidebar-menu-title.scss";

import { FC } from 'react';
import { joinClassStrings } from "../../../../../../utils";

export interface SidebarMenuTitleProps {
  title?: string;
}

const SidebarMenuTitle: FC<SidebarMenuTitleProps> = (props) => {
  const title = props.title || props.children;
  const classString = joinClassStrings("sidebar-menu-title");

  return !title ? null : (
    <h1 className={ classString } children={ title } />
  );
};

export {
  SidebarMenuTitle as default
};