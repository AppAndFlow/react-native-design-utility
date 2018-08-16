import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';

interface IProps {
  font?: string;
  theme: ITheme;
}

export const fontFamilyUtils = (props: IProps) => {
  const _style: {
    fontFamily?: string;
  } = {};

  const themeFamily = get(props, ['theme', 'text', 'fonts']);

  if (themeFamily) {
    const base = get(themeFamily, 'base');

    if (typeof base === 'string') {
      _style.fontFamily = base;
    }

    const font = get(props, 'font');

    if (typeof font === 'string') {
      const _font = get(themeFamily, font);

      if (typeof _font === 'string') {
        _style.fontFamily = _font;
      }
    }
  }

  return _style;
};
