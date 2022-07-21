import "../../styles/sidebar-header.scss";

import { FC } from 'react';
import { joinClassStrings } from "../../../../utils";

export interface SidebarHeaderProps {
  className?: string;
}

const SidebarHeader: FC<SidebarHeaderProps> = (props) => {
  const classString = joinClassStrings("sidebar-header", props.className);

  return (
    <div className={ classString }>
      { props.children }
    </div>
  );
};

export {
  SidebarHeader as default
};