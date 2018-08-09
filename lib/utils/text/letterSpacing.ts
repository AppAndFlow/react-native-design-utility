export const letterSpacingUtils = (props: any) => {
  const _style: {
    letterSpacing?: number;
  } = {};

  if (props.ls) {
    const space = props.theme.text.spacing[props.ls];

    if (space) {
      _style.letterSpacing = space;
    }
  }

  return _style;
};
