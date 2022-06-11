import * as react from "react";

export interface ThemeSwitcherButtonProps {
  onClick?: () => any;
  currentTheme: string;
  icon: react.ReactNode;
  theme: string;
  isActive?: boolean;
}


const ThemeSwitcherButton: react.FC<ThemeSwitcherButtonProps> = (props) => (
  <button title={ props.theme } onClick={ props.onClick } className={ `theme-switcher-btn ${props.isActive ? "active" : ""}` }>
    { props.icon }
  </button>
);


export default ThemeSwitcherButton;