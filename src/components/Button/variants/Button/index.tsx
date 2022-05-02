import "./button.scss";
import { FC, useState, ReactNode } from "react";

export interface ButtonProps {
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => any;
}

const Button: FC<ButtonProps> = (props) => {
  const { disabled, icon, className = '', label, onClick } = props;
  const [isDisabled, setIsDisabled] = useState(disabled);

  const onClickHandler = async () => {
    if (onClick) {
      try {
        setIsDisabled(true);
        await onClick();

      } catch { } finally {
        setIsDisabled(false);
      }
    }
  };

  return (
    <button className={ `button ${className}`.trim() } onClick={ onClickHandler } disabled={ isDisabled } >
      { label && (
        <span className="text-wrapper">
          { label }
        </span>
      ) }
      { icon && (
        <span className="icon-wrapper">
          { icon }
        </span>
      ) }
    </button>
  );
};

export {
  Button as default
};