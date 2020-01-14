import get from 'lodash.get';

import { PositionType } from '../types/Position';

interface IProps {
  position?: PositionType;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const positionUtils = (props: IProps) => {
  let _style: {
    position?: PositionType;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  } = {};

  const position = get(props, 'position');

  if (position) {
    _style.position = position;
  }

  _style.top = get(props, 'top');
  _style.bottom = get(props, 'bottom');
  _style.right = get(props, 'right');
  _style.left = get(props, 'left');

  return _style;
};
