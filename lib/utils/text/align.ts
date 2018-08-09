export const textAlignUtils = (props: any) => {
  const _style: {
    textAlign?: string;
  } = {};

  if (props.center) {
    _style.textAlign = 'center';
  }

  if (props.left) {
    _style.textAlign = 'left';
  }

  if (props.right) {
    _style.textAlign = 'right';
  }

  return _style;
};
