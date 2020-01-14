import get from 'lodash.get';

import { ITheme } from '../types/ITheme';
import { OpacityType } from '../types/OpacityType';

interface IProps {
  theme: ITheme;
  o?: number | OpacityType | string;
}

export const opacityUtils = (props: IProps) => {
  let _style: {
    opacity?: number;
  } = {};

  const opacity = get(props, 'o');

  if (typeof opacity === 'string') {
    const themeOpacity = get(props, ['theme', 'opacity']);

    if (themeOpacity) {
      const _opacity = themeOpacity[opacity];

      if (_opacity) {
        _style.opacity = _opacity;
      }
    }
  } else if (typeof opacity === 'number') {
    _style.opacity = opacity;
  }

  return _style;
};
