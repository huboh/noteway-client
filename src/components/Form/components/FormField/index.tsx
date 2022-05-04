import { FC, useState, useRef, useEffect, FormEvent, ReactNode } from "react";

import './form-field.scss';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import FieldInput, { FieldInputProps } from './FieldInput';

export interface FieldState {
  error: string | null;
  isValid: boolean;
  value?: string;
};

export interface FormFieldProps extends FieldInputProps {
  onInput?(value: string): Promise<FieldState> | FieldState;
  error?: FieldState['error'];
  labelLink?: ReactNode;
  isFocused?: boolean;
  icon?: ReactNode;
}


const FormField: FC<FormFieldProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [{ error, isValid, value }, setfieldState] = useState<FieldState>({
    value: '', isValid: false, error: null
  });

  useEffect(() => { props.isFocused && inputRef.current?.focus?.(); }, [props.isFocused]);

  const showCheck = !error && isValid;
  const handleInput = async (event: FormEvent) => {
    const target: any = event.target;
    const currentValue = target.value;
    const newState = (await props.onInput?.(currentValue)) ?? ({} as FieldState);
    const error = newState.error || null;

    setfieldState(oldState => ({
      ...oldState,
      ...newState,
      value: currentValue,
      error: currentValue ? error : null,
    }));
  };

  return (
    <div className={ `form-field ${error ? 'invalid' : ''}`.trim() } >
      <FieldLabel { ...props } />
      <FieldInput
        { ...props }
        value={ value }
        ref={ inputRef }
        showCheck={ showCheck }
        inputHandler={ handleInput }
      />
      <FieldError error={ error } />
    </div>
  );
};


export default FormField;