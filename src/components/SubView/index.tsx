import './styles/subview.scss';

import { FC } from 'react';

// hooks
import useClassStrings from "../../hooks/useClassStrings";

interface SubViewProps {
  className?: string;
}

const SubView: FC<SubViewProps> = (props) => {
  const classString = useClassStrings("subview", props.className);

  return (
    <section className={ classString }>
      { props.children }
    </section>
  );
};

export {
  SubView as default
};