import get from 'lodash.get';

export const textSizeUtils = (props: any) => {
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
