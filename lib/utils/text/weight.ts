import get from 'lodash.get';

export const weightUtils = (props: any) => {
  const _style: {
    fontWeight?: string;
  } = {};

  const lightWeight = get(props, ['theme', 'text', 'weight', 'light']);
  const normalWeight = get(props, ['theme', 'text', 'weight', 'normal']);
  const boldWeight = get(props, ['theme', 'text', 'weight', 'bold']);

  _style.fontWeight = props.theme.text.weight.normal;

  const light = get(props, 'light');

  if (light && lightWeight) {
    _style.fontWeight = lightWeight;
  }

  const normal = get(props, 'normal');

  if (normal && normalWeight) {
    _style.fontWeight = normalWeight;
  }

  const bold = get(props, 'bold');

  if (bold && boldWeight) {
    _style.fontWeight = boldWeight;
  }

  return _style;
};
