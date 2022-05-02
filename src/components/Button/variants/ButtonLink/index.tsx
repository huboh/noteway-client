import './button-link.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonLinkProps extends LinkProps {
  text: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ text, to, children, ...rest }) => (
  <Link { ...rest } className='button button-link' to={ to } >
    <span className='text-wrapper'>
      { text || children }
    </span>
  </Link>
);

export {
  ButtonLink as default
};