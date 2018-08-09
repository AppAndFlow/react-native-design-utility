import * as React from 'react';
import { Text as RnText, StyleSheet } from 'react-native';

import WrappedComponent from './WrappedComponent';
import { spaceUtils } from '../utils/space';
import { sizeUtils } from '../utils/text/size';
import { weightUtils } from '../utils/text/weight';
import { colorUtils } from '../utils/text/color';
import { textAlignUtils } from '../utils/text/align';
import { ITheme } from '../types/ITheme';
import { SpaceType } from '../types/Space';
import { FontSizeType } from '../types/FontSize';
import { letterSpacingUtils } from '../utils/text/letterSpacing';
import { LetterSpacingType } from '../types/LetterSpacing';
import { borderUtils } from '../utils/border';
import { TextAlignType } from '../types/TextAlign';

export interface IInjectedProps {
  theme: ITheme;
}

type Props = {
  style: any;

  border?: number;

  align: TextAlignType;

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

  ls?: LetterSpacingType;
  size?: FontSizeType;
};

const Text: React.SFC<IInjectedProps & Props> = props => {
  const _space = spaceUtils(props);
  const _size = sizeUtils(props);
  const _weight = weightUtils(props);
  const _color = colorUtils(props);
  const _align = textAlignUtils(props);
  const _spacing = letterSpacingUtils(props);
  const _border = borderUtils(props);

  const style = StyleSheet.create({
    text: {
      ..._space,
      ..._size,
      ..._weight,
      ..._color,
      ..._align,
      ..._spacing,
      ..._border,
      ...props.style,
    },
  });

  return <RnText style={style.text}>{props.children}</RnText>;
};

Text.defaultProps = {
  style: {},
};

export default WrappedComponent(Text);
