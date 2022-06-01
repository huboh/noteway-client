import { FC, ReactElement } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IconProps {
  icon: ReactElement<IconBaseProps>;
}

const Icon: FC<IconProps> = (props) => (
  props.icon || props.children
);

export default Icon;