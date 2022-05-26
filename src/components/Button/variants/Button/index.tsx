import "./button.scss";
import { BiLoaderCircle } from 'react-icons/bi';
import { FC, useState, ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  showSpinner?: boolean;
  className?: string;
  onClick?: () => any;
}


const Button: FC<ButtonProps> = ({ label, type, ...props }) => {
  let [isDisabled, setIsDisabled] = useState(props.disabled);

  // ? if no onClick handler is given there is no way for the state to change, so i default to the passed in `disabled` props
  isDisabled = props.onClick ? isDisabled : props.disabled;

  const className = props.className || '';
  const icon = props.showSpinner ? <BiLoaderCircle className="button-spinner" /> : props.icon;

  // handler
  const onClickHandler = async () => {
    if (!props.onClick) return;

    try {
      setIsDisabled(true);
      await props.onClick?.();

    } catch { } finally {
      setIsDisabled(false);
    }
  };

  return (
    <button className={ `button ${className}`.trim() } onClick={ onClickHandler } type={ type || "button" } disabled={ isDisabled } >
      { label && <span className="text-wrapper">{ label }</span> }
      { icon && <span className="icon-wrapper">{ icon }</span> }
    </button>
  );
};


export {
  Button as default
};