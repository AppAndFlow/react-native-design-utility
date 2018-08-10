import * as React from 'react';
import { View, StyleSheet } from 'react-native';
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
import { DirType, AlignType, JustifyType } from '../types/Flex';

export interface IInjectedProps {
  theme: ITheme;
}

export interface IProps {
  style?: any;

  bg?: string;

  center?: boolean;

  h?: number | string;

  w?: number | string;

  f?: number;

  border?: number;

  dir?: DirType;
  align?: AlignType;
  justify?: JustifyType;

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

const Box: React.SFC<IInjectedProps & IProps> = ({
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

  center,
  border,

  f,
  h,
  w,

  align,
  justify,
  dir,

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
  const _size = boxSizeUtils({ w, h });
  const _flex = boxFlexUtils({ align, justify, dir, f });

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

  const newChild = boxRowsUtils({ rows, children });

  const style = StyleSheet.create({
    box: {
      ..._style,
      ..._space,
      ..._align,
      ..._border,
      ..._size,
      ..._flex,
      ...customStyle,
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
