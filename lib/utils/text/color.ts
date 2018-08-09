export const colorUtils = (props: any) => {
  const _style: {
    color?: string;
  } = {};

  if (props.color) {
    const color = props.theme.color[props.color];

    if (color) {
      _style.color = color;
    }
  }

  return _style;
};
