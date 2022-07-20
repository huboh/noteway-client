import "./view.scss";

import { FC } from "react";
import { joinClassStrings } from '../../utils';

interface ViewProps {
  className?: string;
}

const View: FC<ViewProps> = (props) => {
  const classString = joinClassStrings("view", props.className);

  return (
    <div className={ classString } children={ props.children } />
  );
};

export {
  View as default
};