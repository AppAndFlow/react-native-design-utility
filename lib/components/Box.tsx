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
import { DirType, AlignType, JustifyType, SelfType } from '../types/Flex';
import { radiusUtils } from '../utils/box/radius';
import { RadiusType } from '../types/Radius';
import { shadowUtils } from '../utils/box/shadow';
import { OpacityType } from '../types/OpacityType';
import { opacityUtils } from '../utils/opacity';
import { flattenStyle } from '../utils/flattenStyle';

export interface IInjectedProps {
  theme: ITheme;
}

export interface UtilityBoxProps {
  style?: StyleProp<ViewStyle>;

  bg?: string;

  center?: boolean;

  o?: OpacityType | number | string;

  h?: number | string;

  w?: number | string;

  f?: number;

  border?: number;
  shadow?: number;

  radius?: RadiusType;
  circle?: number;
  avatar?: boolean;

  dir?: DirType;
  align?: AlignType;
  justify?: JustifyType;
  self?: SelfType;

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

  rows?: number[];
}

const Box: React.SFC<IInjectedProps & UtilityBoxProps & ViewProps> = ({
  theme,
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

  radius,
  avatar,
  circle,

  center,
  border,
  shadow,

  f,
  h,
  w,

  align,
  justify,
  self,
  dir,

  o,

  bg,

  rows,
  children,

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
  const _shadow = shadowUtils({ shadow, theme });
  const _size = boxSizeUtils({ w, h });
  const _flex = boxFlexUtils({ align, justify, dir, f, self });
  const _radius = radiusUtils({
    theme,
    radius,
    circle,
    avatar,
    children,
    size: { height: h, width: w },
  });
  const _opacity = opacityUtils({ o, theme });

  const _style: {
    backgroundColor?: string;
  } = {};

  const themeColor = get(theme, 'color');

  if (bg) {
    const color = themeColor[bg];
    if (color) {
      _style.backgroundColor = color;
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
