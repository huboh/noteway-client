import { MdCheckCircle } from 'react-icons/md';
import { FormEventHandler, HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";

export interface FieldInputProps {
  inputHandler?: FormEventHandler;
  showCheck?: boolean;
  icon?: ReactNode;

  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  value?: string;
  label?: string;
  name: string;
  id: string;
}


const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>((props, ref) => {
  const { id, name, type, icon, value, showCheck, placeholder, inputHandler } = props;

  return (
    <div className="field-input-wrapper">
      <input
        ref={ ref }
        id={ id }
        type={ type }
        name={ name }
        value={ value }
        onInput={ inputHandler }
        placeholder={ placeholder }
        className={ "field-input" }
      />
      <span className='field-input-icon-wrapper'>
        { icon || (showCheck && <MdCheckCircle />) }
      </span>
    </div>
  );
});


export default FieldInput;