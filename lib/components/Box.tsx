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

  dir?: 'col' | 'col-reverse' | 'row' | 'row-revers';
  align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  justify?: 'between' | 'around' | 'evenly' | 'start' | 'center' | 'end';

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

const Box: React.SFC<IInjectedProps & IProps> = props => {
  const _space = spaceUtils(props);
  const _align = boxAlignUtils(props);
  const _border = borderUtils(props);
  const _size = boxSizeUtils(props);
  const _flex = boxFlexUtils(props);

  const _style: {
    backgroundColor?: string;
  } = {};

  const themeColor = get(props, ['theme', 'color']);

  const bg = get(props, 'bg');

  if (bg) {
    const color = themeColor[bg];
    if (color) {
      _style.backgroundColor = color;
    }
  }

  const newChild = boxRowsUtils(props);

  const style = StyleSheet.create({
    box: {
      ..._style,
      ..._space,
      ..._align,
      ..._border,
      ..._size,
      ..._flex,
      ...props.style,
    },
  });

  return <View style={style.box}>{newChild}</View>;
};

Box.defaultProps = {
  style: {},
};

export default WrappedComponent(Box);
