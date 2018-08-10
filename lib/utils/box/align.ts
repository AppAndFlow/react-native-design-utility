import get from 'lodash.get';

interface IProps {
  center?: boolean;
}

export const boxAlignUtils = (props: IProps) => {
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
