import { FC, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import './password-field.scss';
import FormField, { FormFieldProps } from '../FormField';

export interface PasswordFieldProps extends FormFieldProps { }

const VisibilityButton = ({ onClick, showPassword }: any) => (
  <button className='btn-toggle-visibility' onClick={ onClick } type="button">
    { !showPassword ? <MdVisibility /> : <MdVisibilityOff /> }
  </button>
);

const PasswordField: FC<PasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      { ...props }
      type={ !showPassword ? 'password' : 'text' }
      icon={ <VisibilityButton showPassword={ showPassword } onClick={ () => setShowPassword(s => !s) } /> }
    />
  );
};

export default PasswordField;