import * as react from 'react';
import * as utils from './utils';
import * as types from './types';
import useAuth from '../../hooks/useAuth';

type Update = types.Preferences['updatePreferences'];

const PreferencesContext = react.createContext(utils.initialState);

const PreferencesProvider: react.FC = ({ children }) => {
  const { user } = useAuth();
  const [preferences, setPreferences] = react.useState(user?.preferences ?? utils.initialState);

  react.useEffect(() => {
    (document.querySelector("body")!).dataset.theme = preferences.theme;
  });

  const updatePreferences: Update = (preferences) => {
    // removing undefined values
    const updatedPreferences = JSON.parse(JSON.stringify(preferences));

    // TODO: validate preferences values
    setPreferences(currState => ({
      ...currState, ...updatedPreferences
    }));
  };

  return (
    <PreferencesContext.Provider value={ { ...preferences, updatePreferences } }>
      { children }
    </PreferencesContext.Provider>
  );
};


export {
  PreferencesProvider as default,
  PreferencesContext
};