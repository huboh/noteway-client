import '../../styles/subview-footer.scss';

import { FC } from 'react';

// hooks
import useClassStrings from "../../../../hooks/useClassStrings";

interface SubViewFooterProps {
  className?: string;
  title?: string;
}

const SubViewFooter: FC<SubViewFooterProps> = (props) => {
  const classString = useClassStrings("subview-footer", props.className);

  return (
    <footer className={ classString }>
      { props.children }
    </footer>
  );
};

export {
  SubViewFooter as default
};