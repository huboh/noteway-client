import "../../styles/sidebar-header.scss";

import { FC } from 'react';
import { SidebarHeaderProps } from '../../types';
import { useClassStrings } from "../../../../hooks/useClassStrings";

const SidebarHeader: FC<SidebarHeaderProps> = (props) => {
  const children = props.children;
  const classString = useClassStrings("sidebar-header", props.className);

  return (
    <div
      children={ children }
      className={ classString }
    />
  );
};

export {
  SidebarHeader as default
};