import { FC, ReactNode } from 'react';

export interface FieldLabelProps {
  labelLink?: ReactNode;
  required?: boolean;
  label?: string;
  id: string;
}


const FieldLabel: FC<FieldLabelProps> = ({ id, label, labelLink, required }) => (
  <span className='field-label-wrapper'>
    <label htmlFor={ id } className="field-label">
      { label } { required && <span className='required-field'>*</span> }
    </label>
    <span className='field-label-link'>
      { labelLink }
    </span>
  </span>
);


export default FieldLabel;