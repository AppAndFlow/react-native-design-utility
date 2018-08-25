import get from 'lodash.get';

import { PositionType } from '../types/Position';

interface IProps {
  position?: PositionType;
}

export const positionUtils = (props: IProps) => {
  let _style: { position?: PositionType } = {};

  const position = get(props, 'position');

  if (position) {
    _style.position = position;
  }

  return _style;
};
