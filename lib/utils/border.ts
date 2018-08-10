import get from 'lodash.get';

import { ITheme } from '../types/ITheme';

interface IProps {
  theme: ITheme;
  border?: number;
}

export const borderUtils = (props: IProps) => {
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
