import "../../styles/icon.scss";
import { FC, ReactElement } from "react";

export interface IconProps {
  icon?: ReactElement;
}

const Icon: FC<IconProps> = ({ icon }) => !icon ? null : (
  <span className="icon-wrapper">
    { icon }
  </span>
);

export {
  Icon as default
};