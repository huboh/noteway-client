import { FC } from "react";
import { SITE_NAME } from "../../../../constants";

// hooks
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

// components
import SubView from "../../../../components/SubView";

const Integrations: FC = () => {
  useDocumentTitle(`Integrations - ${SITE_NAME}`);

  return (
    <SubView className="integrations">
    </SubView>
  );
};

export {
  Integrations as default
};