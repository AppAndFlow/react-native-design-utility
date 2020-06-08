import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export const flattenStyle = (
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>,
) => {
  if (style === null || typeof style !== 'object') {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  }

  const result = {};
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    // @ts-ignore
    const computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (const key in computedStyle) {
        // @ts-ignore
        result[key] = computedStyle[key]
      }
    }
  }
  return result;
};
