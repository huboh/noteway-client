import ButtonLink from "./variants/ButtonLink";
import ButtonDefault, { ButtonProps } from "./variants/Button";

export default function Button(props: ButtonProps) {
  return (
    <ButtonDefault { ...props } />
  );
}

Button.Link = ButtonLink;