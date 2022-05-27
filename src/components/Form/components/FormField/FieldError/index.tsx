import { FC } from 'react';

export interface FieldErrorProps {
  error?: string | null;
}


const FieldError: FC<FieldErrorProps> = ({ error }) => (
  <span className="field-error-wrapper">
    { error }
  </span>
);


export default FieldError;