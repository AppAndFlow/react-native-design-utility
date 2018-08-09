export const sizeUtils = (props: any) => {
  const _style: {
    fontSize?: number;
  } = {};

  if (props.size) {
    if (typeof props.size === 'string') {
      const size = props.theme.text.size[props.size];

      if (size) {
        _style.fontSize = size;
      }
    } else if (typeof props.size === 'number') {
      _style.fontSize = props.size;
    }
  }

  return _style;
};
