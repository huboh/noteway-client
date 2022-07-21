import Icon from "./variants/Icon";
import ButtonLink from "./variants/ButtonLink";
import ButtonPrimary, { ButtonProps } from "./variants/Button";

export default function Button(props: ButtonProps) {
  return (
    <ButtonPrimary { ...props } />
  );
}

Button.Icon = Icon;
Button.Link = ButtonLink;
Button.Primary = ButtonPrimary;