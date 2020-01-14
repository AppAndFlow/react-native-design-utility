// TODO: Update this code

import get from 'lodash.get';
import { Image } from 'react-native';
import * as React from 'react';

import { ITheme } from '../../types/ITheme';
import { RadiusType } from '../../types/Radius';

interface IProps {
  radius?: RadiusType;
  theme: ITheme;
  circle?: number;
  size: {
    height?: number | string;
    width?: number | string;
  };
  avatar?: boolean;
  children?: React.ReactNode;
}

export const radiusUtils = (props: IProps) => {
  const _style: {
    borderRadius?: number;
    height?: number;
    width?: number;
  } = {};

  const themeRadius = get(props, ['theme', 'radius']);

  const radius = get(props, 'radius');
  const circle = get(props, 'circle');
  const avatar = get(props, 'avatar');
  const children = get(props, 'children');

  let newChildren = children;

  if (themeRadius) {
    if (
      avatar &&
      typeof circle === 'number' &&
      children &&
      React.Children.only(children).valueOf() === Image
    ) {
      // @ts-ignore
      newChildren = React.cloneElement(React.Children.only(children), {
        style: {
          borderRadius: circle / 2,
          height: circle,
          width: circle,
        },
      });
      _style.borderRadius = circle / 2;
      _style.height = circle;
      _style.width = circle;
    } else if (typeof circle === 'number') {
      _style.borderRadius = circle / 2;
      _style.height = circle;
      _style.width = circle;
    } else if (radius) {
      if (typeof radius === 'string') {
        const _radius = themeRadius[radius];

        if (_radius) {
          _style.borderRadius = _radius;
        } else {
          if (radius === 'rounded') {
            const height = get(props, ['size', 'height']);
            const width = get(props, ['size', 'width']);

            if (typeof height === 'number' && typeof width === 'number') {
              _style.borderRadius = 99999;
            }
          }
        }
      } else if (typeof radius === 'boolean') {
        const base = get(themeRadius, 'base');

        if (base) {
          _style.borderRadius = base;
        }
      } else if (typeof radius === 'number') {
        _style.borderRadius = radius;
      }
    }
  }

  return {
    style: _style,
    children: newChildren,
  };
};
