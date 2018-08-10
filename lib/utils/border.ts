import get from 'lodash.get';

export const borderUtils = (props: any) => {
  let _style = {};

  const border = get(props, 'border');

  if (border) {
    const themeBorders = get(props, ['theme', 'borders']);

    if (themeBorders[border]) {
      _style = themeBorders[border];
    }
  }

  return _style;
};
