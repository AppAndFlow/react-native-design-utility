import get from 'lodash.get';

export const letterSpacingUtils = (props: any) => {
  const _style: {
    letterSpacing?: number;
  } = {};

  const themeSpacing = get(props, ['theme', 'text', 'spacing']);
  const ls = get(props, 'ls');

  if (themeSpacing) {
    _style.letterSpacing = get(props, ['theme', 'text', 'spacing', 'normal']);
  }

  if (typeof ls === 'string' && themeSpacing) {
    const space = themeSpacing[ls];

    if (space) {
      _style.letterSpacing = space;
    }
  }

  return _style;
};
