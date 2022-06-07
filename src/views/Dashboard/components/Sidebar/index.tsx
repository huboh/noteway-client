import "./sidebar.scss";
import { useLocation } from "react-router-dom";
import { FC, useState, createContext } from 'react';

// components
import SidebarHeader from "./SidebarHeader";
import PrimarySidebarMenu from "./PrimarySidebarMenu";
import SecondarySidebarMenu from "./SecondarySidebarMenu";

export interface SidebarProps { }

export interface SidebarState {
  activeTab: null | string;
  setActiveTab?: (tabId: string) => void;
}

const getDefaultState = (tabId?: string | null) => ({
  activeTab: tabId || null
});

const SidebarContext = createContext<SidebarState>(getDefaultState());


const Sidebar: FC<SidebarProps> = () => {
  const activeTab = useLocation().pathname.split("/")[1] || "notes";
  const [sidebarState, setSidebarState] = useState<SidebarState>(getDefaultState(activeTab));

  // callbacks
  const setActiveTab = (tabId: string) => setSidebarState({ activeTab: tabId });

  return (
    <SidebarContext.Provider value={ { ...sidebarState, setActiveTab } }>
      <aside className="sidebar">
        <SidebarHeader />
        <PrimarySidebarMenu />
        <SecondarySidebarMenu />
      </aside>
    </SidebarContext.Provider>
  );
};


export {
  Sidebar as default,
  SidebarContext
};