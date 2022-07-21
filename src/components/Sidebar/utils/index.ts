import { createContext } from "react";

export interface SidebarState {
  activeTab: null | string;
  setActiveTab?: (tabId: string) => void;
}

export const getDefaultState = (tabId?: string | null) => {
  return {
    activeTab: tabId || null
  };
};

export const SidebarContext = createContext<SidebarState>(getDefaultState());
