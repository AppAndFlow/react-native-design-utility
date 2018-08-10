import * as React from 'react';

import { UtilityThemeContext } from '../Provider';
import { ITheme } from '../types/ITheme';

export interface IProps {
  theme: ITheme;
}

function getDisplayName(wrappedComponent: React.ComponentType<IProps>) {
  return wrappedComponent.displayName || wrappedComponent.name || 'Component';
}

const WrappedComponent = (Cp: React.ComponentType<IProps>) => {
  return class extends React.Component {
    static displayName = `HOC(${getDisplayName(Cp)})`;
    render() {
      return (
        <UtilityThemeContext.Consumer>
          {val => <Cp theme={val} {...this.props} />}
        </UtilityThemeContext.Consumer>
      );
    }
  };
};

export default WrappedComponent;
