import { FC } from 'react';
import { FieldState } from '../';

export interface FieldErrorProps {
  error: FieldState['error'];
}


const FieldError: FC<FieldErrorProps> = ({ error }) => (
  <span className="field-error-wrapper">
    { error }
  </span>
);


export default FieldError;