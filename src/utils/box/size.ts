import get from 'lodash.get';
import { DimensionValue } from 'react-native';

interface IProps {
  h?: DimensionValue;
  w?: DimensionValue;
}

export const boxSizeUtils = (props: IProps) => {
  const _style: {
    height?: DimensionValue;
    width?: DimensionValue;
  } = {};

  const h = get(props, 'h');

  if (h) {
    _style.height = h;
  }

  const w = get(props, 'w');

  if (w) {
    _style.width = w;
  }

  return _style;
};
