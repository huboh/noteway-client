import './styled-link.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface StyledLinkProps extends LinkProps {
  text?: string;
}

const StyledLink: FC<StyledLinkProps> = ({ text, children, ...rest }) => (
  <Link { ...rest } className={ `link ${rest.className || ''}`.trim() }>
    { text || children }
  </Link>
);

export default StyledLink;