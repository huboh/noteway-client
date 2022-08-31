import { FC } from "react";
import { SITE_NAME } from "../../../../constants";

// hooks
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

// components
import SubView from "../../../../components/SubView";

const Account: FC = () => {
  useDocumentTitle(`Account - ${SITE_NAME}`);

  return (
    <SubView className="account">
    </SubView>
  );
};

export {
  Account as default
};