import { FC, ReactElement } from "react";

export interface OnlyIfProps {
  render: ReactElement;
  condition: boolean;
  isLoading?: boolean;
}

const OnlyIf: FC<OnlyIfProps> = ({ render, condition, children, isLoading }) => (
  (isLoading || condition) ? (render || children) : null
);

export {
  OnlyIf as default
};