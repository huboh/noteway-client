import "../../styles/sidebar-footer.scss";

import { FC, useMemo } from 'react';
import { joinClassStrings } from "../../../../utils";

export interface SidebarFooterProps {
  className?: string;
}

const SidebarFooter: FC<SidebarFooterProps> = (props) => {
  const classString = useMemo(() => joinClassStrings("sidebar-footer", props.className),
    [props.className]
  );

  return (
    <footer className={ classString }>
      { props.children }
    </footer>
  );
};

export {
  SidebarFooter as default
};