import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';

interface IProps {
  color?: string;
  theme: ITheme;
}

export const colorUtils = (props: IProps) => {
  const _style: {
    color?: string;
  } = {};

  const themeColor = get(props, ['theme', 'color']);

  const color = get(props, 'color');

  if (themeColor) {
    const black = get(themeColor, 'black');

    if (black) {
      _style.color = black;
    }

    if (color) {
      const _color = themeColor[color];

      if (_color) {
        _style.color = _color;
      } else {
        _style.color = color;
      }
    }
  }

  return _style;
};
