import './form-field.scss';
import { MdCheckCircle } from 'react-icons/md';
import { FC, useState, useRef, useEffect, HTMLInputTypeAttribute, FormEvent, ReactNode } from "react";


export type FieldError = { message: string; } | null;

export type FieldState = { error: string | null; isValid: boolean; value?: string; };

export interface FormFieldProps {
  id: string;
  name: string;
  label?: string;
  isFocused?: boolean;
  icon?: ReactNode;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  labelLink?: ReactNode;
  type?: HTMLInputTypeAttribute;
  onInput?(value: string): Promise<FieldState> | FieldState;
  setFieldError?(value: string): any;
}

const defaultState: FieldState = { value: '', isValid: false, error: null };

const FormField: FC<FormFieldProps> = (props) => {
  const { labelLink, isFocused, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [fieldState, setfieldState] = useState(defaultState);
  const fieldClass = `form-field ${fieldState.error ? 'invalid' : ''}`.trim();

  const handleInput = async (event: FormEvent) => {
    const target: any = event.target;
    const currentValue = target.value;
    const newState = (await props.onInput?.(currentValue)) ?? {} as FieldState;
    const error = newState.error || null;

    setfieldState(oldState => ({
      ...oldState,
      ...newState,
      value: currentValue,
      error: currentValue ? error : null,
    }));
  };

  useEffect(() => { isFocused && inputRef.current?.focus?.(); }, [isFocused]);

  return (
    <div className={ fieldClass } >
      <span className='form-label-wrapper'>
        <label htmlFor={ props.id } className="form-label">
          { props.label } { props.required && <span className='required-field'>*</span> }
        </label>

        <span className='form-label-link'>
          { labelLink }
        </span>
      </span>

      <div className="form-input-wrapper">
        <input
          { ...rest }
          ref={ inputRef }
          value={ fieldState.value }
          className={ "form-input" }
          onInput={ handleInput }
        />
        <span className='form-input-icon-wrapper'>
          { props.icon || ((!fieldState.error && fieldState.isValid) && <MdCheckCircle />) }
        </span>
      </div>

      <span className="error-message-wrapper">
        { fieldState.error }
      </span>
    </div>
  );
};

export default FormField;