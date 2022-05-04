import './form.scss';
import { FC, Dispatch, SetStateAction, useState, useRef, ReactElement, FormEvent } from "react";

export type errorSetter = Dispatch<SetStateAction<boolean>>;

export type Fields = (state: FormState, setter?: errorSetter) => ReactElement;

export interface FormState {
  isSubmitting: boolean;
}

export interface FormProps {
  className?: string;
  fields: Fields;
  onSubmit?(form: { [k: string]: FormDataEntryValue; }, hasError: boolean): any;
}


const Form: FC<FormProps> = (props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [hasError, setHasError] = useState(false);
  const [state, setState] = useState<FormState>({ isSubmitting: false });

  const handleSubmit = async (event: FormEvent) => {
    if (props.onSubmit && !hasError) {
      event.preventDefault();
      setState((prevState) => ({ ...prevState, isSubmitting: true }));

      try {
        const formData = new FormData(formRef.current!);
        const entries = Object.fromEntries(formData.entries());
        await props.onSubmit(entries, hasError);

      } catch { } finally {
        setState((prevState) => ({ ...prevState, isSubmitting: false }));
      }
    }
  };

  return (
    <form
      method="POST"
      ref={ formRef }
      onSubmit={ handleSubmit }
      className={ `form ${props.className || ''}`.trim() }
    >
      { props.fields?.(state) || props.children }
    </form>
  );
};


export default Form;