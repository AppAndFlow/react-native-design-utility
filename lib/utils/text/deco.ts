import get from 'lodash.get';
import { TextDecoType } from '../../types/TextDeco';

interface IProps {
  deco?: TextDecoType;
}

export const decoUtils = (props: IProps) => {
  const _style: {
    textDecorationLine?:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through';
  } = {};

  const deco = get(props, 'deco');

  if (typeof deco === 'string') {
    if (deco === 'none') {
      _style.textDecorationLine = 'none';
    } else if (deco === 'underline') {
      _style.textDecorationLine = 'underline';
    } else if (deco === 'through') {
      _style.textDecorationLine = 'line-through';
    } else if (deco === 'underline-through') {
      _style.textDecorationLine = 'underline line-through';
    }
  }

  return _style;
};
