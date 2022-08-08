import '../../styles/subview-header.scss';

import { FC } from 'react';

// hooks
import useClassStrings from "../../../../hooks/useClassStrings";

interface SubViewHeaderProps {
  className?: string;
  sticky?: boolean;
  title?: string;
}

const SubViewHeader: FC<SubViewHeaderProps> = (props) => {
  const sticky = props.sticky ? "sticky" : "";
  const classString = useClassStrings("subview-header", sticky, props.className);

  return (
    <header className={ classString }>
      { props.title && <h1 className='title' children={ props.title } /> }
      { props.children }
    </header>
  );
};

export {
  SubViewHeader as default
};