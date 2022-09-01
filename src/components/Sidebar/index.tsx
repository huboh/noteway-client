import "./styles/sidebar.scss";

import { SidebarProps } from './types';
import { useState, useCallback } from 'react';
import { SidebarContext, getDefaultState } from "./utils";

// hooks
import useClassStrings from "../../hooks/useClassStrings";

// components
import SidebarMenu from "./components/SidebarMenu";
import SidebarHeader from "./components/SidebarHeader";
import SidebarFooter from "./components/SidebarFooter";

export function Sidebar(props: SidebarProps) {
  const classString = useClassStrings("sidebar", props.className);
  const [state, setState] = useState(getDefaultState(props.activeTab));
  const setActiveTab = useCallback((tabId: string) => setState({ activeTab: tabId }), []);

  return (
    <SidebarContext.Provider value={ { ...state, setActiveTab } }>
      <aside className={ classString } children={ props.children } />
    </SidebarContext.Provider>
  );
};

Sidebar.Menu = SidebarMenu;
Sidebar.Header = SidebarHeader;
Sidebar.Footer = SidebarFooter;

export {
  Sidebar as default
};