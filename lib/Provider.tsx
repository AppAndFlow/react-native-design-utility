import * as React from 'react';

import { theme } from './theme';

export const UtilityThemeContext = React.createContext(theme);

export class UtilityThemeProvider extends React.Component {
  state = {
    theme: theme,
  };
  render() {
    return (
      <UtilityThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </UtilityThemeContext.Provider>
    );
  }
}
