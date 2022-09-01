import "./styles/layout-selector.scss";

import { Layout } from "../../types";
import { FC, useMemo } from "react";
import { LayoutIconMap } from "../../constants";
import { joinClassStrings } from "../../utils";

// components
import Button from "../Button";

export interface LayoutSelectorProps {
  className?: string;
  seletedLayout?: Layout;
  onSelect?: (layout: Layout) => void;
}

const LayoutSelector: FC<LayoutSelectorProps> = (props) => {
  const classString = useMemo(() => joinClassStrings("layout-selector", props.className),
    [props.className]
  );

  return (
    <ul className={ classString }>
      { (Object.entries(LayoutIconMap) as [[Layout, FC]]).map(([layout, Icon]) => (
        <li key={ layout }>
          <Button.Icon
            title={ layout }
            icon={ <Icon /> }
            onClick={ () => props.onSelect?.(layout as any) }
            className={ `layout-btn ${layout === props.seletedLayout ? "selected" : ""}`.trim() }
          />
        </li>
      )) }
    </ul >
  );
};

export {
  LayoutSelector as default
};