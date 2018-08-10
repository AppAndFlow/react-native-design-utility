import get from 'lodash.get';

export const lineHeightUtils = (props: any, fontSize?: number) => {
  const _style: {
    lineHeight?: number;
  } = {};

  const themeLineHeight = get(props, ['theme', 'text', 'lineHeight']);

  const height = get(props, 'lineH');

  if (themeLineHeight && typeof fontSize === 'number') {
    const normal = get(themeLineHeight, 'normal');

    if (typeof normal === 'number') {
      _style.lineHeight = fontSize * normal;
    }

    if (height) {
      const size = themeLineHeight[height];

      if (typeof size === 'number') {
        _style.lineHeight = fontSize * size;
      }
    }
  }

  return _style;
};
