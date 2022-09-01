import { ReactNode } from "react";

export interface SidebarProps {
  className?: string;
  children: ReactNode;
  activeTab?: string | null;
}

export interface SidebarFooterProps {
  className?: string;
}

export interface SidebarHeaderProps {
  className?: string;
}

export interface SidebarMenuProps extends SidebarMenuTitleProps {
  className?: string;
  menuItems: SidebarMenuItemProps[];
  onItemClick?: (tabId: string) => void;
}

export interface SidebarMenuTitleProps {
  title?: string;
}

export interface SidebarMenuItemProps {
  onItemClick?: (tabId: string) => void;
  icon: ReactElement;
  text: string;
  to: string;
}
