import * as React from 'react';
import {
  Text as RnText,
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
} from 'react-native';

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
import { manipulationUtils } from '../utils/text/manipulation';
import { fontStyleUtils } from '../utils/text/fontStyle';
import { lineHeightUtils } from '../utils/text/lineHeight';
import { decoUtils } from '../utils/text/deco';
import { LineHeightType } from '../types/LineHeight';
import { TextDecoType } from '../types/TextDeco';
import { OpacityType } from '../types/OpacityType';
import { opacityUtils } from '../utils/opacity';
import { flattenStyle } from '../utils/flattenStyle';
import { fontFamilyUtils } from '../utils/text/fontFamily';

export interface IInjectedProps {
  theme: ITheme;
}

export interface UtilityTextProps extends TextProps {
  style?: StyleProp<TextStyle>;

  border?: number;

  italic?: boolean;

  lineH?: LineHeightType | string | number;
  lineHeight?: LineHeightType | string | number;

  deco?: TextDecoType;
  textDecoration?: TextDecoType;

  o?: OpacityType | number | string;
  opacity?: OpacityType | number | string;

  center?: boolean;
  left?: boolean;
  right?: boolean;

  color?: string;

  font?: string;
  fontFamily?: string;

  m?: SpaceType;
  margin?: SpaceType;

  mb?: SpaceType;
  marginBottom?: SpaceType;

  mt?: SpaceType;
  marginTop?: SpaceType;

  mr?: SpaceType;
  marginRight?: SpaceType;

  ml?: SpaceType;
  marginLeft?: SpaceType;

  mx?: SpaceType;
  marginHorizontale?: SpaceType;

  my?: SpaceType;
  marginVertical?: SpaceType;

  p?: SpaceType;
  padding?: SpaceType;

  pb?: SpaceType;
  paddingBottom?: SpaceType;

  pt?: SpaceType;
  paddingTop?: SpaceType;

  pr?: SpaceType;
  paddingRight?: SpaceType;

  pl?: SpaceType;
  paddingLeft?: SpaceType;

  px?: SpaceType;
  paddingHorizontale?: SpaceType;

  py?: SpaceType;
  paddingVertical?: SpaceType;

  ls?: LetterSpacingType | number | string;
  letterSpacing?: LetterSpacingType | number | string;

  size?: FontSizeType | string | number;
  fontSize?: FontSizeType | string | number;

  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  capitalizeEach?: boolean;
  thousand?: boolean;

  bold?: boolean;
  light?: boolean;
  normal?: boolean;
  weight?: string;
  fontWeight?: string;
}

const Text: React.SFC<IInjectedProps & UtilityTextProps> = ({
  theme,
  border,
  color,

  m,
  margin,
  mb,
  marginBottom,
  mt,
  marginTop,
  mr,
  marginRight,
  ml,
  marginLeft,
  my,
  marginVertical,
  mx,
  marginHorizontale,
  p,
  padding,
  pb,
  paddingBottom,
  pt,
  paddingTop,
  pr,
  paddingRight,
  pl,
  paddingLeft,
  px,
  paddingHorizontale,
  py,
  paddingVertical,

  ls,
  letterSpacing,

  lowercase,
  uppercase,
  capitalize,
  capitalizeEach,
  thousand,

  font,
  fontFamily,

  center,
  right,
  left,

  lineH,
  lineHeight,
  size,
  fontSize,

  bold,
  normal,
  light,
  weight,
  fontWeight,

  o,
  opacity,

  italic,
  deco,
  textDecoration,
  style: customStyle,
  children,
  ...rest
}) => {
  const _space = spaceUtils({
    m: m ?? margin,
    mb: mb ?? marginBottom,
    mt: mt ?? marginTop,
    mr: mr ?? marginRight,
    ml: ml ?? marginLeft,
    my: my ?? marginVertical,
    mx: mx ?? marginHorizontale,
    p: p ?? padding,
    pb: pb ?? paddingBottom,
    py: py ?? paddingVertical,
    pt: pt ?? paddingTop,
    pr: pr ?? paddingRight,
    pl: pl ?? paddingLeft,
    px: px ?? paddingHorizontale,
    theme,
  });
  const _size = textSizeUtils({ size: size ?? fontSize, theme });
  const _weight = weightUtils({
    bold,
    normal,
    light,
    theme,
    weight: weight ?? fontWeight,
  });
  const _color = colorUtils({ color, theme });
  const _align = textAlignUtils({
    center,
    right,
    left,
    theme,
  });
  const _spacing = letterSpacingUtils({ ls: ls ?? letterSpacing, theme });
  const _border = borderUtils({ border, theme });
  const _fontStyle = fontStyleUtils({ italic });
  const _lineHeight = lineHeightUtils(
    { lineH: lineH ?? lineHeight, theme },
    _size.fontSize,
  );
  const _deco = decoUtils({ deco: deco ?? textDecoration });
  const _opacity = opacityUtils({ o: o ?? opacity, theme });
  const _fontFamily = fontFamilyUtils({ font: font ?? fontFamily, theme });

  const child = manipulationUtils({
    capitalize,
    capitalizeEach,
    lowercase,
    uppercase,
    children,
    thousand,
  });

  const _customStyle = flattenStyle(customStyle);

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
      ..._fontFamily,
      ..._customStyle,
    },
  });

  return (
    // @ts-ignore
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
