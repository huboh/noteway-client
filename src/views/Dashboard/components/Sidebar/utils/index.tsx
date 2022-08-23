// icons
import { NOTES, TAGS, ARCHIVED_NOTES, TRASH, SETTINGS, HOME } from '../../../../../constants/routes';
import { TbNotes, TbTags, TbArchive, TbTrash, TbSettings, TbLogout } from 'react-icons/tb';

export const defaultTab = "notes";

export const mainMenu = [
  { text: "notes", icon: <TbNotes />, to: NOTES, },
  { text: "tags", icon: <TbTags />, to: TAGS, },
  { text: "archived notes", icon: <TbArchive />, to: ARCHIVED_NOTES, },
  { text: "trash", icon: <TbTrash />, to: TRASH, },
];

export const accountMenu = [
  { text: "settings", icon: <TbSettings />, to: SETTINGS, },
  { text: "logout", icon: <TbLogout />, to: HOME, },
];
