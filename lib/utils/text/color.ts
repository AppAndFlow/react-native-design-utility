import get from 'lodash.get';

export const colorUtils = (props: any) => {
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
