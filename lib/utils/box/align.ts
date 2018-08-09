export const boxAlignUtils = (props: any) => {
  const _style: {
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
  } = {};

  if (props.center) {
    _style.justifyContent = 'center';
    _style.alignItems = 'center';
  }

  return _style;
};
