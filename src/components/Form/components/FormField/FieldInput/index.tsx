import { MdCheckCircle } from 'react-icons/md';
import { FC, RefObject, FormEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";

export interface FieldInputProps {
  ref?: RefObject<HTMLInputElement>;
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


const FieldInput: FC<FieldInputProps> = ({ id, name, type, ref, icon, value, showCheck, placeholder, inputHandler }) => (
  <div className="field-input-wrapper">
    <input
      id={ id }
      ref={ ref }
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


export default FieldInput;