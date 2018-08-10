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

  if (color && themeColor) {
    const _color = themeColor[color];

    if (_color) {
      _style.color = _color;
    }
  }

  return _style;
};
