import * as React from 'react';

import { theme } from '../theme';

export const UtilityThemeContext = React.createContext(theme);

interface IProps {
  theme?: any;
}

export const UtilityThemeProvider = (
  props: React.PropsWithChildren<IProps>,
) => {
  return (
    <UtilityThemeContext.Provider value={props.theme || theme}>
      {props.children}
    </UtilityThemeContext.Provider>
  );
};
