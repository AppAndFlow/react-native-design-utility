import * as React from 'react';

import { UtilityThemeContext } from '../Provider';

export const useThemeContext = () => {
  return React.useContext(UtilityThemeContext);
};
