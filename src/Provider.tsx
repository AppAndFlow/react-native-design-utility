import * as React from 'react';

import { theme } from '../theme';

export const UtilityThemeContext = React.createContext(theme);

interface IProps {
  theme?: any;
}

export class UtilityThemeProvider extends React.Component<IProps> {
  static defaultProps = {
    theme: null,
  };
  state = {
    theme: this.props.theme || theme,
  };
  render() {
    return (
      <UtilityThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </UtilityThemeContext.Provider>
    );
  }
}
