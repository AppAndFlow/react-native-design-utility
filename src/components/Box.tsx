import * as React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import get from 'lodash.get';

import WrappedComponent from './WrappedComponent';
import { spaceUtils } from '../utils/space';
import { ITheme } from '../types/ITheme';
import { SpaceType } from '../types/Space';
import { boxAlignUtils } from '../utils/box/align';
import { borderUtils } from '../utils/border';
import { boxSizeUtils } from '../utils/box/size';
import { boxFlexUtils } from '../utils/box/flex';
import { boxRowsUtils } from '../utils/box/rows';
import {
  DirType,
  AlignType,
  JustifyType,
  SelfType,
  FlexWrapType,
} from '../types/Flex';
import { radiusUtils } from '../utils/box/radius';
import { RadiusType } from '../types/Radius';
import { shadowUtils } from '../utils/box/shadow';
import { OpacityType } from '../types/OpacityType';
import { opacityUtils } from '../utils/opacity';
import { flattenStyle } from '../utils/flattenStyle';
import { PositionType } from '../types/Position';
import { positionUtils } from '../utils/position';

export interface IInjectedProps {
  theme: ITheme;
}

export interface UtilityBoxProps extends ViewProps {
  style?: StyleProp<ViewStyle>;

  bg?: string;
  backgroundColor?: string;

  center?: boolean;

  o?: OpacityType | number | string;
  opacity?: OpacityType | number | string;

  h?: number | string;
  height?: number | string;

  w?: number | string;
  width?: number | string;

  f?: number;
  flex?: number;

  border?: number;
  shadow?: number;
  boxShadow?: number;

  radius?: RadiusType;
  borderRadius?: RadiusType;

  circle?: number;
  avatar?: boolean;

  dir?: DirType;
  flexDirection?: DirType;

  align?: AlignType;
  alignItems?: AlignType;

  justify?: JustifyType;
  justifyContent?: JustifyType;

  self?: SelfType;
  alignSelf?: SelfType;

  flexWrap?: FlexWrapType;

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
  marginHorizontal?: SpaceType;

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

  position?: PositionType;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  rows?: number[];
}

const Box: React.SFC<IInjectedProps & UtilityBoxProps> = ({
  theme,
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
  marginHorizontal,
  p,
  padding,
  pb,
  paddingBottom,
  py,
  paddingVertical,
  pt,
  paddingTop,
  pr,
  paddingRight,
  pl,
  paddingLeft,
  px,
  paddingHorizontale,

  radius,
  borderRadius,
  avatar,
  circle,

  center,
  border,
  shadow,
  boxShadow,

  f,
  flex,
  h,
  height,
  w,
  width,

  align,
  alignItems,
  justify,
  justifyContent,
  self,
  alignSelf,
  dir,
  flexDirection,
  flexWrap,

  o,
  opacity,

  bg,
  backgroundColor,

  rows,
  children,

  position,
  top,
  bottom,
  left,
  right,

  style: customStyle,
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
  const _align = boxAlignUtils({ center });
  const _border = borderUtils({ border, theme });
  const _shadow = shadowUtils({ shadow: shadow ?? boxShadow, theme });
  const _size = boxSizeUtils({ w: w ?? width, h: h ?? height });
  const _flex = boxFlexUtils({
    align: align ?? alignItems,
    justify: justify ?? justifyContent,
    dir: dir ?? flexDirection,
    f: f ?? flex,
    self: self ?? alignSelf,
    flexWrap,
  });
  const _radius = radiusUtils({
    theme,
    radius: radius ?? borderRadius,
    circle,
    avatar,
    children,
    size: { height: h ?? height, width: w ?? width },
  });
  const _opacity = opacityUtils({ o: o ?? opacity, theme });
  const _position = positionUtils({ position, top, bottom, right, left });

  const _style: {
    backgroundColor?: string;
  } = {};

  const themeColor = get(theme, 'color');

  const _bg = bg ?? backgroundColor;

  if (_bg) {
    const color = themeColor[_bg];
    if (color) {
      _style.backgroundColor = color;
    } else {
      _style.backgroundColor = _bg;
    }
  }

  let newChild;

  if (avatar) {
    newChild = _radius.children;
  } else {
    newChild = boxRowsUtils({ rows, children });
  }

  const _customStyle = flattenStyle(customStyle);

  const style = StyleSheet.create({
    box: {
      ..._style,
      ..._space,
      ..._align,
      ..._border,
      ..._shadow,
      ..._size,
      ..._flex,
      ..._radius.style,
      ..._opacity,
      ..._position,
      ..._customStyle,
    },
  });

  return (
    <View {...rest} style={style.box}>
      {newChild}
    </View>
  );
};

Box.defaultProps = {
  style: {},
};

Box.displayName = 'Box';

export default WrappedComponent(Box);
