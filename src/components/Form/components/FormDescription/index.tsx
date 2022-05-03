import './form-description.scss';
import { FC } from "react";

export interface FormDescriptionProps {
  className?: string;
  text?: string;
}


const FormDescription: FC<FormDescriptionProps> = (props) => {
  const { className, text, children } = props;

  return !text ? null : (
    <p className={ `form-description ${className}` }>
      { text || children }
    </p>
  );
};


export default FormDescription;