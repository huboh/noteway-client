import { FC } from "react";
import { Theme, Layout } from "../types";
import { BiLoaderCircle } from 'react-icons/bi';
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";

export const SITE_NAME = 'Noteway';

export const TOKEN_KEY = 'token';

export const Spinner = BiLoaderCircle;

export const Themes: Theme[] = ['light', 'dark', 'system'];

export const LayoutIconMap: Record<Layout, FC> = {
  list: TbLayoutList,
  grid: TbLayoutGrid,
};

// note
export const DefaultNoteTitleText = "-- no title --";
export const DefaultNoteContextText = "-- no content --";