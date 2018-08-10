import { FlexAlignType } from 'react-native';
import get from 'lodash.get';

import {
  JustifyContentType,
  FlexDirectionType,
  DirType,
  AlignType,
  JustifyType,
} from '../../types/Flex';

interface IProps {
  f?: number;
  dir?: DirType;
  align?: AlignType;
  justify?: JustifyType;
}

export const boxFlexUtils = (props: IProps) => {
  const _style: {
    flexDirection?: FlexDirectionType;
    alignItems?: FlexAlignType;
    justifyContent?: JustifyContentType;
    flex?: number;
  } = {};

  if (props.f && typeof props.f === 'number') {
    _style.flex = props.f;
  }

  const dir = get(props, 'dir');

  if (dir) {
    if (dir === 'row') {
      _style.flexDirection = 'row';
    } else if (dir === 'row-reverse') {
      _style.flexDirection = 'row-reverse';
    } else if (dir === 'col') {
      _style.flexDirection = 'column';
    } else if (dir === 'col-reverse') {
      _style.flexDirection = 'column-reverse';
    }
  }

  const align = get(props, 'align');

  if (align) {
    if (align === 'center') {
      _style.alignItems = 'center';
    } else if (align === 'start') {
      _style.alignItems = 'flex-start';
    } else if (align === 'end') {
      _style.alignItems = 'flex-end';
    } else if (align === 'stretch') {
      _style.alignItems = 'stretch';
    } else if (align === 'baseline') {
      _style.alignItems = 'baseline';
    }
  }

  const justify = get(props, 'justify');

  if (justify) {
    if (justify === 'center') {
      _style.justifyContent = 'center';
    } else if (justify === 'start') {
      _style.justifyContent = 'flex-start';
    } else if (justify === 'end') {
      _style.justifyContent = 'flex-end';
    } else if (justify === 'between') {
      _style.justifyContent = 'space-between';
    } else if (justify === 'around') {
      _style.justifyContent = 'space-around';
    } else if (justify === 'evenly') {
      _style.justifyContent = 'space-evenly';
    }
  }

  return _style;
};
