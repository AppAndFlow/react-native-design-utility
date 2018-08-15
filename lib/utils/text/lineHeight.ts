import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';
import { LineHeightType } from '../../types/LineHeight';

interface IProps {
  theme: ITheme;
  lineH?: LineHeightType | string | number;
}

export const lineHeightUtils = (props: IProps, fontSize?: number) => {
  const _style: {
    lineHeight?: number;
  } = {};

  const themeLineHeight = get(props, ['theme', 'text', 'lineHeight']);

  const height = get(props, 'lineH');

  if (typeof height === 'number') {
    _style.lineHeight = height;
  } else if (themeLineHeight && typeof fontSize === 'number') {
    const normal = get(themeLineHeight, 'normal');

    if (typeof normal === 'number') {
      _style.lineHeight = fontSize * normal;
    }

    if (height) {
      let _size;

      if (typeof height === 'string') {
        _size = themeLineHeight[height];
      } else if (typeof height === 'number') {
        _size = height;
      }

      if (typeof _size === 'number') {
        _style.lineHeight = fontSize * _size;
      }
    }
  }

  return _style;
};
