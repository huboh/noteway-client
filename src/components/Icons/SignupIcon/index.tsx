import Icon from '../';
import { FC } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { IconBaseProps } from 'react-icons';

export interface SignupIconProps extends IconBaseProps { }


const SignupIcon: FC<SignupIconProps> = (props) => (
  <Icon
    icon={ <BiUserPlus { ...props } className={ `icon svg-icon ${props.className || ''}`.trim() } /> }
  />
);


export default SignupIcon;