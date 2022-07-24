import "./styles/error-screen.scss";

import { FC } from "react";
import { joinClassStrings } from "../../utils";

interface ErrorScreenProps {
  error: Error;
  className?: string;
}

const ErrorScreen: FC<ErrorScreenProps> = (props) => {
  const classString = joinClassStrings("error-screen-wrapper", props.className);

  return (
    <div className={ classString }>
      <p className="error-message">{ props.error.message }</p>
    </div>
  );
};

export {
  ErrorScreen as default
};