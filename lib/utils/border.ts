export const borderUtils = (props: any) => {
  let _style = {};

  if (props.border) {
    if (props.theme.borders[props.border]) {
      _style = props.theme.borders[props.border];
    }
  }

  return _style;
};
