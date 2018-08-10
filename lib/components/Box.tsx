import * as React from 'react';
import { View, StyleSheet, FlexAlignType } from 'react-native';

import WrappedComponent from './WrappedComponent';
import { spaceUtils } from '../utils/space';
import { ITheme } from '../types/ITheme';
import { SpaceType } from '../types/Space';
import { boxAlignUtils } from '../utils/box/align';
import { borderUtils } from '../utils/border';
import { boxSizeUtils } from '../utils/box/size';
import { FlexDirectionType, JustifyContentType } from '../types/Flex';
import { boxFlexUtils } from '../utils/box/flex';

export interface IInjectedProps {
  theme: ITheme;
}

export interface IProps {
  style: any;

  bg?: string;

  center?: boolean;

  h?: number | string;

  w?: number | string;

  f?: number;

  border?: number;

  dir?: FlexDirectionType;
  align?: FlexAlignType;
  justify?: JustifyContentType;

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

  if (props.bg) {
    const bg = props.theme.color[props.bg];
    if (bg) {
      _style.backgroundColor = bg;
    }
  }

  // if (props.rows) {
  //   const childs = React.Children.map(props.children, (child, index) =>
  //     React.cloneElement(child[index], {

  //     }),
  //   );
  // }

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

  return <View style={style.box}>{props.children}</View>;
};

Box.defaultProps = {
  style: {},
};

export default WrappedComponent(Box);
