import get from 'lodash.get';

interface IProps {
  h?: string | number;
  w?: string | number;
}

export const boxSizeUtils = (props: IProps) => {
  const _style: {
    height?: string | number;
    width?: string | number;
  } = {};

  const h = get(props, 'h');

  if (h) {
    if (typeof h === 'string') {
      _style.height = h;
    } else if (typeof h === 'number') {
      if (h < 1) {
        _style.height = `${h * 100}%`;
      } else {
        _style.height = h;
      }
    }
  }

  const w = get(props, 'w');

  if (w) {
    if (typeof w === 'string') {
      _style.width = w;
    } else if (typeof w === 'number') {
      if (w < 1) {
        _style.width = `${w * 100}%`;
      } else {
        _style.width = w;
      }
    }
  }

  return _style;
};
