import "./styles/error-screen.scss";

import { FC, ReactElement } from "react";
import { TbInfoCircle, TbRefresh } from "react-icons/tb";

import Button from "../Button";
import useClassStrings from "../../hooks/useClassStrings";

interface ErrorScreenProps {
  error?: Error;
  title?: string;
  message?: string;
  className?: string;

  ctaText?: string;
  ctaIcon?: ReactElement;
  ctaFunction?: () => void;
}

const DefaultErrorTitle = "Sorry, there's been a problem";
const DefaultErrorMessage = "Click the button below to reload the page. We might be having some technical issues if this keep happening contact us";

const ErrorScreen: FC<ErrorScreenProps> = (props) => {
  const btnText = props.ctaText || "reload page";
  const btnIcon = props.ctaIcon || <TbRefresh />;
  const title = props.title || DefaultErrorTitle;
  const message = props.message || props.error?.message || DefaultErrorMessage;

  const classString = useClassStrings("error-screen-wrapper", props.className);

  return (
    <div className={ classString }>
      <TbInfoCircle
        className={ "error-icon" }
      />

      <div className="error-messages">
        <h1 className={ "error-title" } children={ title } />
        <p className={ "error-message" } children={ message } />
      </div>

      <Button.Primary
        text={ btnText }
        icon={ btnIcon }
        onClick={ () => props.ctaFunction ? props.ctaFunction() : window.location.reload() }
      />
    </div>
  );
};

export {
  ErrorScreen as default
};