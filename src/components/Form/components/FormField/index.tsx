import './form-field.scss';

import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import FieldInput, { FieldInputProps } from './FieldInput';

import useForm from "../../../../hooks/useForm";
import { FC, useRef, useEffect, useMemo, ReactNode } from "react";

export interface FormFieldProps extends FieldInputProps {
  labelLink?: ReactNode;
  isFocused?: boolean;
  icon?: ReactNode;
}


const FormField: FC<FormFieldProps> = ({ isFocused, ...props }) => {
  const form = useForm();
  const inputRef = useRef<HTMLInputElement>(null);
  const field = useMemo(() => form.getField(form.fields, props.name), [form, props.name]);

  const showCheck = !field.error && field.isValid;
  const className = `form-field ${field.error ? 'invalid' : ''}`.trim();

  useEffect(() => {
    isFocused && inputRef.current?.focus?.();
  }, [isFocused]);

  props = { ...props, showCheck };

  return (
    <div className={ className } >
      <FieldLabel { ...props } />
      <FieldInput { ...props } ref={ inputRef } value={ field.value } inputHandler={ form.handleChange } />
      <FieldError error={ field.error } />
    </div>
  );
};


export default FormField;