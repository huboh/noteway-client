import './form-button.scss';
import { FC } from "react";
import Button, { ButtonProps } from "../../Button/variants/Button";

export interface FormButtonProps extends ButtonProps { }

const FormButton: FC<FormButtonProps> = (props) => {
  return (
    <Button className='form-button' { ...props } />
  );
};

export default FormButton;