import "./styles/settings.scss";

import { FC } from "react";
import { Outlet } from 'react-router-dom';

// hooks
import useSettings from "./hooks/useSettings";

// components
import View from '../../components/View';
import Sidebar from './components/Sidebar';
import Protected from '../../components/Protected';
import SettingsProvider from "./components/SettingsProvider";

const Settings: FC = () => {
  const settingsData = useSettings();

  return (
    <Protected>
      <SettingsProvider data={ settingsData }>
        <View className="settings">
          <Sidebar />
          <Outlet />
        </View>
      </SettingsProvider>
    </Protected >
  );
};

export {
  Settings as default
};;