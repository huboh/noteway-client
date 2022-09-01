import { FC } from "react";
import ErrorScreen from "../../../../../../components/ErrorScreen";

export interface ErrorViewProps {
  error?: Error;
  onRetry: VoidFunction;
}

export const ErrorView: FC<ErrorViewProps> = (props) => {
  const error = props.error;
  const title = error?.message ? `Error: ${error?.message}` : undefined;

  return (
    <ErrorScreen title={ title } ctaText="retry" ctaFunction={ props.onRetry } />
  );
};

export {
  ErrorView as default
};