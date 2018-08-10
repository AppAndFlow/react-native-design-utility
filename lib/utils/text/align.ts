import get from 'lodash.get';

export const textAlignUtils = (props: any) => {
  const _style: {
    textAlign?: string;
  } = {};

  const center = get(props, 'center');

  if (center) {
    _style.textAlign = 'center';
  }

  const left = get(props, 'left');

  if (left) {
    _style.textAlign = 'left';
  }

  const right = get(props, 'right');

  if (right) {
    _style.textAlign = 'right';
  }

  return _style;
};
