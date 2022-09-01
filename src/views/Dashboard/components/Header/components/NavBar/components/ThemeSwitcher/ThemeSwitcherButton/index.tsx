import "./theme-switcher-btn.scss";
import { FC, ReactElement } from "react";

export interface ThemeSwitcherButtonProps {
  onClick?: (theme: any) => any;
  isActive?: boolean;
  icon: ReactElement;
  theme: string;
}

const ThemeSwitcherButton: FC<ThemeSwitcherButtonProps> = (props) => (
  <button
    title={ props.theme }
    children={ props.icon }
    onClick={ () => props.onClick?.(props.theme) }
    className={ `theme-switcher-btn ${props.isActive ? "active" : ""}` }
  />
);

export {
  ThemeSwitcherButton as default
};