import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import WrappedComponent from './WrappedComponent';
import { spaceUtils } from '../utils/space';
import { ITheme } from '../types/ITheme';
import { SpaceType } from '../types/Space';
import { boxAlignUtils } from '../utils/box/align';
import { borderUtils } from '../utils/border';

export interface IInjectedProps {
  theme: ITheme;
}

export interface IProps {
  style: any;

  bg?: string;

  center?: boolean;

  h?: number | string;

  w?: number | string;

  border?: number;

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
}

const Box: React.SFC<IInjectedProps & IProps> = props => {
  const _space = spaceUtils(props);
  const _align = boxAlignUtils(props);
  const _border = borderUtils(props);

  const _style: {
    backgroundColor?: string;
    height?: string | number;
    width?: string | number;
  } = {};

  if (props.bg) {
    const bg = props.theme.color[props.bg];
    if (bg) {
      _style.backgroundColor = bg;
    }
  }

  if (props.h) {
    if (typeof props.h === 'string') {
      _style.height = props.h;
    } else if (typeof props.h === 'number') {
      if (props.h < 1) {
        _style.height = `${props.h * 100}%`;
      } else {
        _style.height = props.h;
      }
    }
  }

  if (props.w) {
    if (typeof props.w === 'string') {
      _style.width = props.w;
    } else if (typeof props.w === 'number') {
      if (props.w < 1) {
        _style.width = `${props.w * 100}%`;
      } else {
        _style.width = props.w;
      }
    }
  }

  const style = StyleSheet.create({
    box: {
      ..._style,
      ..._space,
      ..._align,
      ..._border,
      ...props.style,
    },
  });

  return <View style={style.box}>{props.children}</View>;
};

Box.defaultProps = {
  style: {},
};

export default WrappedComponent(Box);
