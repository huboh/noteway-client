import './form-button.scss';

import { FC } from "react";
import useForm from "../../../../hooks/useForm";
import Button, { ButtonProps } from "../../../Button/variants/Button";

export interface FormButtonProps extends ButtonProps {
  isSubmitting?: boolean;
}


const FormButton: FC<FormButtonProps> = (props) => {
  const isSubmitting = useForm().isSubmitting || props.isSubmitting;

  return (
    <Button
      { ...props }
      className='form-button'
      disabled={ isSubmitting }
      showSpinner={ isSubmitting }
      type={ props.type || 'submit' }
    />
  );
};


export default FormButton;