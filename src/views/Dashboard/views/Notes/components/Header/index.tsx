import { FC } from "react";
import { Layout } from "../../../../../../types";

import useButton from "../../hooks/useButton";
import useDashboardContext from "../../../../hooks/useDashboardContext";

// components
import LayoutSelector from "../../../../../../components/LayoutSelector";
import SubViewHeader from "../../../../../../components/SubView/components/SubViewHeader";

export interface HeaderProps {
  layout: Layout;
  showButton: boolean;
  onLayoutSelect: (layout: Layout) => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const context = useDashboardContext();
  const Button = useButton(props.showButton);

  context.useHeaderButton(Button);

  return (
    <SubViewHeader sticky={ true }>
      <LayoutSelector className={ "layout-selector" } seletedLayout={ props.layout } onSelect={ props.onLayoutSelect } />
    </SubViewHeader>
  );
};

export {
  Header as default
};