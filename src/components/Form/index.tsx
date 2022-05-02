import './form.scss';
import { FC, useState, useRef, ReactElement, FormEvent } from "react";

export interface FormState {
  isSubmitting: boolean;
}

export interface FormProps {
  className?: string;
  fields(state: FormState): ReactElement;
  onSubmit?(form: { [k: string]: FormDataEntryValue; }): any;
}


const Form: FC<FormProps> = (props) => {
  const { className, onSubmit, fields, children } = props;

  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ isSubmitting: false });

  const handleSubmit = async (event: FormEvent) => {
    if (onSubmit) {
      event.preventDefault();
      setState((prevState) => ({ ...prevState, isSubmitting: true }));

      try {
        const formData = new FormData(formRef.current!);
        const entries = Object.fromEntries(formData.entries());
        await onSubmit(entries);

      } catch { } finally {
        setState((prevState) => ({ ...prevState, isSubmitting: false }));
      }
    }
  };

  return (
    <form
      ref={ formRef }
      method="POST"
      onSubmit={ handleSubmit }
      className={ `form ${className ? className : ''}`.trim() }
    >
      { fields(state) || children }
    </form>
  );
};


export default Form;