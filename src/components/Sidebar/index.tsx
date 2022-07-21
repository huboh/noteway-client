import "./styles/sidebar.scss";

import { joinClassStrings } from "../../utils";
import { SidebarContext, getDefaultState } from "./utils";
import { FC, useState, useCallback, useMemo } from 'react';

export interface SidebarProps {
  className?: string;
  activeTab?: string | null;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const classString = useMemo(() => joinClassStrings("sidebar", props.className), [props.className]);
  const [sidebarState, setSidebarState] = useState(getDefaultState(props.activeTab));
  const setActiveTab = useCallback((tabId: string) => setSidebarState({ activeTab: tabId }), []);

  return (
    <SidebarContext.Provider value={ { ...sidebarState, setActiveTab } }>
      <aside className={ classString } children={ props.children } />
    </SidebarContext.Provider>
  );
};

export {
  Sidebar as default,
  SidebarContext
};