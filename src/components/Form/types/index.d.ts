import { Dispatch, SetStateAction, ReactElement, FormEvent, FormHTMLAttributes } from "react";

export type errorSetter = Dispatch<SetStateAction<boolean>>;

export type FormStateSetter = Dispatch<SetStateAction<FormState>>;

export type Fields = (state: FormState, setter?: errorSetter) => ReactElement;

export type SubmitHandlerProps = {
  setter: FormStateSetter,
  onSubmit: FormProps['onSubmit'],
  fields: FormState['fields'];
};

export type FieldValidator = (value: string, fields: FormField[]) => {
  isValid?: boolean;
  error?: string | null;
};

export interface FormField {
  name: string;
  value: string;
  isValid?: boolean;
  error?: string | null;
  validator?: FieldValidator;
};

export interface FormState {
  isSubmitting: boolean;
  fields: Array<FormField>;

  handleChange?: (event: FormEvent) => void;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  noValidate?: boolean;

  render?: Fields;
  fields: FormField[];
  onSubmit?: (form: object) => any | Promise<any>;
}
