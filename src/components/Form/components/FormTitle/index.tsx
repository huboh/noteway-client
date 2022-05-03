import './form-title.scss';
import { FC } from "react";

export interface FormTitleProps {
  className?: string;
  text?: string;
}

const FormTitle: FC<FormTitleProps> = (props) => {
  const { className, text, children } = props;

  return !text ? null : (
    <h1 className={ `form-title ${className}` }>
      { text || children }
    </h1>
  );
};

export default FormTitle;