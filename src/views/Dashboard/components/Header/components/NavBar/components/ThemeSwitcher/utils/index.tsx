import { ReactElement } from 'react';
import { TbSun, TbMoon } from 'react-icons/tb';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import { Theme } from '../../../../../../../../../types';

export const themeIconMap: Record<Theme, ReactElement> = {
  "dark": <TbMoon />,
  "light": <TbSun />,
  "system": <MdOutlineAutoAwesome fill="var(--text-color)" />
};