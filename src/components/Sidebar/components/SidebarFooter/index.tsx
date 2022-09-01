import "../../styles/sidebar-footer.scss";

import { FC } from 'react';
import { SidebarFooterProps } from '../../types';
import { useClassStrings } from "../../../../hooks/useClassStrings";

const SidebarFooter: FC<SidebarFooterProps> = (props) => {
  const children = props.children;
  const classString = useClassStrings("sidebar-footer", props.className);

  return (
    <footer
      children={ children }
      className={ classString }
    />
  );
};

export {
  SidebarFooter as default
};