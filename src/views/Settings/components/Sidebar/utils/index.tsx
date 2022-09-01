import { TbUser, TbGitMerge } from "react-icons/tb";
import { ACCOUNT, INTEGRATIONS } from "../../../../../constants/routes";

export const mainMenu = [
  { text: "account", icon: <TbUser />, to: ACCOUNT },
  { text: "integrations", icon: <TbGitMerge />, to: INTEGRATIONS },
];
