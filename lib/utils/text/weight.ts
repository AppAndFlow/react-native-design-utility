export const weightUtils = (props: any) => {
  const _style: {
    fontWeight?: string;
  } = {};

  _style.fontWeight = props.theme.text.weight.normal;

  if (props.light) {
    const weight = props.theme.text.weight.light;

    if (weight) {
      _style.fontWeight = weight;
    }
  }

  if (props.normal) {
    const weight = props.theme.text.weight.normal;

    if (weight) {
      _style.fontWeight = weight;
    }
  }

  if (props.bold) {
    const weight = props.theme.text.weight.bold;

    if (weight) {
      _style.fontWeight = weight;
    }
  }

  return _style;
};
