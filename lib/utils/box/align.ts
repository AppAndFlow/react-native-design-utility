import get from 'lodash.get';

export const boxAlignUtils = (props: any) => {
  const _style: {
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
  } = {};

  const center = get(props, 'center');

  if (center) {
    _style.justifyContent = 'center';
    _style.alignItems = 'center';
  }

  return _style;
};
