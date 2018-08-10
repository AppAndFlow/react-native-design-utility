import get from 'lodash.get';

export const fontStyleUtils = (props: any) => {
  const _style: {
    fontStyle?: 'normal' | 'italic';
  } = {};

  const italic = get(props, 'italic');

  if (italic) {
    _style.fontStyle = 'italic';
  }

  return _style;
};
