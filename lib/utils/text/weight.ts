import get from 'lodash.get';

import { ITheme } from '../../types/ITheme';

interface IProps {
  theme: ITheme;
  light?: boolean;
  bold?: boolean;
  normal?: boolean;
  weight?: string;
}

export const weightUtils = (props: IProps) => {
  const _style: {
    fontWeight?: string;
  } = {};

  const lightWeight = get(props, ['theme', 'text', 'weight', 'light']);
  const normalWeight = get(props, ['theme', 'text', 'weight', 'normal']);
  const boldWeight = get(props, ['theme', 'text', 'weight', 'bold']);

  _style.fontWeight = normalWeight;

  const light = get(props, 'light');

  if (light && lightWeight) {
    _style.fontWeight = lightWeight;
  }

  const normal = get(props, 'normal');

  if (normal && normalWeight) {
    _style.fontWeight = normalWeight;
  }

  const bold = get(props, 'bold');

  if (bold && boldWeight) {
    _style.fontWeight = boldWeight;
  }

  const weight = get(props, 'weight');

  if (typeof weight === 'string') {
    _style.fontWeight = weight;
  }

  return _style;
};
