import "../../styles/button.scss";

import { Spinner } from "../../../../constants";
import { joinClassStrings } from "../../../../utils";
import { FC, ButtonHTMLAttributes, useMemo } from "react";

import Text, { TextProps } from "../../components/Text";
import Icon, { IconProps } from "../../components/Icon";

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>["type"];

export interface ButtonProps extends TextProps, IconProps {
  onClick?: VoidFunction;
  disabled?: boolean;
  className?: string;
  type?: ButtonType;
  isBusy?: boolean;
  title?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const type = props.type || "button";
  const busyClass = props.isBusy ? "busy" : "";
  const classString = useMemo(() => joinClassStrings("button", busyClass, props.className), [busyClass, props.className]);

  return (
    <button type={ type } className={ classString } title={ props.title } onClick={ props.onClick } disabled={ props.disabled }>
      <Icon icon={ props.isBusy ? <Spinner className="spinner" /> : props.icon } />
      <Text text={ props.text } />
    </button>
  );
};

export {
  Button as default
};