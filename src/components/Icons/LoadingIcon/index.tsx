import Icon from '../';
import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { BiLoaderCircle } from 'react-icons/bi';

export interface LoadingIconProps extends IconBaseProps { }


const LoadingIcon: FC<LoadingIconProps> = (props) => (
  <Icon
    icon={ <BiLoaderCircle { ...props } className={ `icon svg-icon ${props.className || ''}`.trim() } /> }
  />
);


export default LoadingIcon;