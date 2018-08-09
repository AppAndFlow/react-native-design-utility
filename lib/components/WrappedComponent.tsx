import * as React from 'react';

import { UtilityThemeContext } from '../Provider';
import { ITheme } from '../types/ITheme';

export interface IProps {
  theme: ITheme;
}

const WrappedComponent = (Cp: React.ComponentType<IProps>) => {
  return class extends React.Component {
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
