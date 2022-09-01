import "../../styles/text.scss";
import { FC } from "react";

export interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => (
  <span className="text-wrapper">
    { text }
  </span>
);

export {
  Text as default
};