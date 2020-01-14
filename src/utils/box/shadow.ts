import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';

interface IProps {
  theme: ITheme;
  shadow?: number;
}

export const shadowUtils = (props: IProps) => {
  let _style = {};

  const shadow = get(props, 'shadow');

  if (typeof shadow === 'number') {
    const themeShadows = get(props, ['theme', 'shadows']);

    const _shadow = themeShadows[shadow];

    if (_shadow) {
      _style = _shadow;
    }
  }

  return _style;
};
