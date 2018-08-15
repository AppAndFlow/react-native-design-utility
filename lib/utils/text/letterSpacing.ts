import get from 'lodash.get';

import { LetterSpacingType } from '../../types/LetterSpacing';
import { ITheme } from '../../types/ITheme';

interface IProps {
  ls?: LetterSpacingType | number | string;
  theme: ITheme;
}

export const letterSpacingUtils = (props: IProps) => {
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
  } else if (typeof ls === 'number') {
    _style.letterSpacing = ls;
  }

  return _style;
};
