import Icon from '../';
import { FC } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { IconBaseProps } from 'react-icons';

export interface LoginIconProps extends IconBaseProps { }


const LoginIcon: FC<LoginIconProps> = (props) => (
  <Icon
    icon={ <BiLogIn { ...props } className={ `icon svg-icon ${props.className || ''}`.trim() } /> }
  />
);


export default LoginIcon;