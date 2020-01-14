import * as React from 'react';

import { UtilityThemeContext } from '../Provider';
import { ITheme } from '../types/ITheme';

export interface IProps {
  theme: ITheme;
}

function getDisplayName(wrappedComponent: React.ComponentType<IProps & any>) {
  return (
    `Utility(${wrappedComponent.displayName})` ||
    `Utility(${wrappedComponent.name})` ||
    'Component'
  );
}

function connect<OuterProps>(Cp: React.ComponentType<OuterProps & IProps>) {
  return class extends React.PureComponent<OuterProps> {
    static displayName = getDisplayName(Cp);

    render() {
      return (
        <UtilityThemeContext.Consumer>
          {val => <Cp theme={val} {...this.props} />}
        </UtilityThemeContext.Consumer>
      );
    }
  };
}

export default connect;
