import * as React from 'react';
import { Text as RnText, StyleSheet, TextProps } from 'react-native';
import get from 'lodash.get';

import WrappedComponent from './WrappedComponent';
import { spaceUtils } from '../utils/space';
import { textSizeUtils } from '../utils/text/size';
import { weightUtils } from '../utils/text/weight';
import { colorUtils } from '../utils/text/color';
import { textAlignUtils } from '../utils/text/align';
import { ITheme } from '../types/ITheme';
import { SpaceType } from '../types/Space';
import { FontSizeType } from '../types/FontSize';
import { letterSpacingUtils } from '../utils/text/letterSpacing';
import { LetterSpacingType } from '../types/LetterSpacing';
import { borderUtils } from '../utils/border';
import { textManipulationUtils } from '../utils/text/manipulation';
import { fontStyleUtils } from '../utils/text/fontStyle';
import { lineHeightUtils } from '../utils/text/lineHeight';
import { decoUtils } from '../utils/text/deco';
import { LineHeightType } from '../types/LineHeight';
import { TextDecoType } from '../types/TextDeco';
import { OpacityType } from '../types/OpacityType';
import { opacityUtils } from '../utils/opacity';

export interface IInjectedProps {
  theme: ITheme;
}

export interface UtilityTextProps {
  style?: any;

  border?: number;

  italic?: boolean;

  lineH?: LineHeightType | string | number;

  deco?: TextDecoType;

  o?: OpacityType | number | string;

  center?: boolean;
  left?: boolean;
  right?: boolean;

  color?: string;

  m?: SpaceType;
  mb?: SpaceType;
  mt?: SpaceType;
  mr?: SpaceType;
  ml?: SpaceType;
  mx?: SpaceType;
  my?: SpaceType;

  p?: SpaceType;
  pb?: SpaceType;
  pt?: SpaceType;
  pr?: SpaceType;
  pl?: SpaceType;
  px?: SpaceType;
  py?: SpaceType;

  ls?: LetterSpacingType | number | string;
  size?: FontSizeType | string | number;

  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  capitalizeEach?: boolean;
  thousand?: boolean;

  bold?: boolean;
  light?: boolean;
  normal?: boolean;
  weight?: string;
}

const Text: React.SFC<IInjectedProps & UtilityTextProps & TextProps> = ({
  theme,
  border,
  color,

  m,
  mb,
  mt,
  mr,
  ml,
  my,
  mx,
  p,
  pb,
  pt,
  pr,
  pl,
  px,
  py,

  ls,

  lowercase,
  uppercase,
  capitalize,
  capitalizeEach,
  thousand,

  center,
  right,
  left,

  lineH,
  size,

  bold,
  normal,
  light,
  weight,

  o,

  italic,
  deco,
  style: customStyle,
  children,
  ...rest
}) => {
  const _space = spaceUtils({
    m,
    mb,
    mt,
    mr,
    ml,
    my,
    mx,
    p,
    pb,
    py,
    pt,
    pr,
    pl,
    px,
    theme,
  });
  const _size = textSizeUtils({ size, theme });
  const _weight = weightUtils({ bold, normal, light, theme, weight });
  const _color = colorUtils({ color, theme });
  const _align = textAlignUtils({
    center,
    right,
    left,
    theme,
  });
  const _spacing = letterSpacingUtils({ ls, theme });
  const _border = borderUtils({ border, theme });
  const _fontStyle = fontStyleUtils({ italic });
  const _lineHeight = lineHeightUtils({ lineH, theme }, _size.fontSize);
  const _deco = decoUtils({ deco });
  const _opacity = opacityUtils({ o, theme });

  const child = textManipulationUtils({
    capitalize,
    capitalizeEach,
    lowercase,
    uppercase,
    children,
    thousand,
  });

  const fontFamily = get(theme, ['text', 'font']);

  const style = StyleSheet.create({
    text: {
      ..._space,
      ..._size,
      ..._weight,
      ..._color,
      ..._align,
      ..._spacing,
      ..._border,
      ..._fontStyle,
      ..._lineHeight,
      ..._deco,
      ..._opacity,
      fontFamily,
      ...customStyle,
    },
  });

  return (
    <RnText {...rest} style={style.text}>
      {child}
    </RnText>
  );
};

Text.defaultProps = {
  style: {},
};

Text.displayName = 'Text';

export default WrappedComponent(Text);
