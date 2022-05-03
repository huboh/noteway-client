import { FC, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import './password-field.scss';
import FormField, { FormFieldProps } from '../FormField';

export interface PasswordFieldProps extends FormFieldProps { }

const PasswordField: FC<PasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { label = 'password', placeholder = 'password' } = props;

  return (
    <FormField
      { ...{ ...props, label, placeholder } }
      type={ !showPassword ? 'password' : 'text' }
      icon={ (
        <button className='btn-toggle-visibility' onClick={ () => setShowPassword(s => !s) } >
          { !showPassword ? <MdVisibility /> : <MdVisibilityOff /> }
        </button>
      ) }
    />
  );
};

export default PasswordField;