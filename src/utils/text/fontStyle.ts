import get from 'lodash.get';

interface IProps {
  italic?: boolean;
}

export const fontStyleUtils = (props: IProps) => {
  const _style: {
    fontStyle?: 'normal' | 'italic';
  } = {};

  const italic = get(props, 'italic');

  if (italic) {
    _style.fontStyle = 'italic';
  }

  return _style;
};
