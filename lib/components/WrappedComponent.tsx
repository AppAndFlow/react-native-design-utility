import * as React from 'react';

import { UtilityThemeContext } from '../Provider';
import { ITheme } from '../types/ITheme';

export interface IProps {
  theme: ITheme;
}

function getDisplayName(wrappedComponent: React.ComponentType<IProps>) {
  return `Utility(${wrappedComponent.displayName})` || `Utility(${wrappedComponent.name})` || 'Component';
}

function connect<OuterProps>(Cp: React.ComponentType<OuterProps & IProps>) {
  const C: React.SFC<OuterProps> = (props: OuterProps) => (
    <UtilityThemeContext.Consumer>
      {val => <Cp theme={val} {...props} />}
    </UtilityThemeContext.Consumer>
  );

  C.displayName = getDisplayName(Cp);

  return C;
}

export default connect;
