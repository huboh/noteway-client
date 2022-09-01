import { FC } from "react";
import { TbPlus } from "react-icons/tb";

// components
import Button from "../../../../../../components/Button";

export interface HeaderButtonProps {
  display?: boolean;
}

export const HeaderButton: FC<HeaderButtonProps> = (props) => !props.display ? null : (
  <Button.Primary text="new note" icon={ <TbPlus /> } />
);

export {
  HeaderButton as default
};
