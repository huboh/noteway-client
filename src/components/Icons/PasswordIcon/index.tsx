import Icon from '../';
import { FC } from 'react';
import { MdPassword } from 'react-icons/md';
import { IconBaseProps } from 'react-icons';

export interface PasswordIconProps extends IconBaseProps { }


const PasswordIcon: FC<PasswordIconProps> = (props) => (
  <Icon
    icon={ <MdPassword { ...props } className={ `icon svg-icon ${props.className || ''}`.trim() } /> }
  />
);


export default PasswordIcon;