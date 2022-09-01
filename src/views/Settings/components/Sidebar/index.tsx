import "./styles/settings-sidebar.scss";

import { FC } from 'react';
import { goBack } from '../../utils';
import { mainMenu } from './utils';
import { TbArrowBack } from 'react-icons/tb';
import { useLocation } from "react-router-dom";

// components
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import Sidebar from "../../../../components/Sidebar";

const DashboardSidebar: FC = () => {
  const activeTab = useLocation().pathname.split("/")[2] || "account";

  return (
    <Sidebar className={ "settings-sidebar" } activeTab={ activeTab }>
      <Sidebar.Header>
        <Button.Icon onClick={ goBack } title={ "back" } icon={ <TbArrowBack /> } />
        <Text.Header.H1 text="settings" size="extra-small" className="settings-header" />
      </Sidebar.Header>

      <Sidebar.Menu title="menu" menuItems={ mainMenu } />
    </Sidebar>
  );
};

export {
  DashboardSidebar as default
};