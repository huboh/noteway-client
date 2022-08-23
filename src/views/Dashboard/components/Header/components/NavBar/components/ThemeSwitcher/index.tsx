import './styles/theme-switcher.scss';

import { themeIconMap } from './utils';
import { FC, useCallback } from 'react';
import { Theme } from '../../../../../../../../types';
import { Themes } from '../../../../../../../../constants';

// components
import ThemeSwitcherButton from './ThemeSwitcherButton';

// hooks
import usePreferences from '../../../../../../../../hooks/usePreferences';
import useClassStrings from '../../../../../../../../hooks/useClassStrings';

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const preferences = usePreferences();
  const classString = useClassStrings("theme-switcher-wrapper", props.className);
  const onClick = useCallback((theme: Theme) => preferences.updatePreferences?.({ theme }), [preferences]);

  return (
    <div className={ classString }>
      { Themes.map((theme) => (
        <ThemeSwitcherButton
          { ...{ key: theme, onClick, theme, icon: themeIconMap[theme], isActive: preferences.theme === theme } }
        />
      )) }
    </div>
  );
};

export {
  ThemeSwitcher as default
};