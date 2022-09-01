import "../../styles/icon-button.scss";

import { ButtonProps } from "../Button";
import { FC, useMemo, ReactNode } from "react";
import { joinClassStrings } from "../../../../utils";

export interface IconProps extends Omit<ButtonProps, "icon" | "text" | "isBusy"> {
  icon?: ReactNode;
}

const Icon: FC<IconProps> = (props) => {
  const type = props.type || 'button';
  const classString = useMemo(() => joinClassStrings("button-icon", props.className), [props.className]);

  return (
    <button className={ classString } onClick={ props.onClick } title={ props.title } type={ type }>
      { props.icon }
    </button>
  );
};

export {
  Icon as default
};