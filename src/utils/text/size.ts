import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';
import { FontSizeType } from '../../types/FontSize';

interface IProps {
  theme: ITheme;
  size?: number | FontSizeType | string;
}

export const textSizeUtils = (props: IProps) => {
  const _style: {
    fontSize?: number;
  } = {};

  const themeSize = get(props, ['theme', 'text', 'size']);

  if (themeSize) {
    const base = get(themeSize, 'base');

    _style.fontSize = base;

    const size = get(props, 'size');

    if (size) {
      if (typeof size === 'string') {
        const _size = themeSize[size];

        if (typeof _size === 'number') {
          _style.fontSize = _size;
        }
      } else if (typeof size === 'number') {
        _style.fontSize = size;
      }
    }
  }

  return _style;
};
