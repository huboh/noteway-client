import './theme-switcher.scss';

import * as react from "react";
import usePreferences from '../../../../../../hooks/usePreferences';

import { TbSun, TbMoon } from 'react-icons/tb';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import ThemeSwitcherButton from './ThemeSwitcherButton';

const themeMap = [
  { theme: "system", icon: <MdOutlineAutoAwesome fill="var(--text-color)" /> },
  { theme: "light", icon: <TbSun /> },
  { theme: "dark", icon: <TbMoon /> },
];


const ThemeSwitcher: react.FC = () => {
  const { theme: currentTheme, updatePreferences } = usePreferences();

  const buttons = themeMap.map(themeData => {
    const isActive = currentTheme === themeData.theme;
    const onClick = () => updatePreferences?.({ theme: themeData.theme as any });

    return (
      <ThemeSwitcherButton
        onClick={ onClick }
        isActive={ isActive }
        icon={ themeData.icon }
        key={ themeData.theme }
        theme={ themeData.theme }
        currentTheme={ currentTheme }
      />
    );
  });

  return (
    <div className="theme-switcher-wrapper">
      { buttons }
    </div>
  );
};


export default ThemeSwitcher;