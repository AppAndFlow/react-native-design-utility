import get from 'lodash.get';
import React from 'react';

const capitalizeText = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeEachWords = (str: string) =>
  str
    .split(' ')
    .map(capitalizeText)
    .join(' ')
    .trim();

const thousandSeparator = (str: string | number) =>
  String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

interface IProps {
  capitalize?: boolean;
  capitalizeEach?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  thousand?: boolean;
  children?: React.ReactNode;
}

export const manipulationUtils = (props: IProps) => {
  let newChild = props.children;

  if (typeof props.children === 'string') {
    const uppercase = get(props, 'uppercase');
    const lowercase = get(props, 'lowercase');
    const capitalize = get(props, 'capitalize');
    const capitalizeEach = get(props, 'capitalizeEach');
    const thousand = get(props, 'thousand');

    if (uppercase) {
      newChild = props.children.toUpperCase();
    }

    if (lowercase) {
      newChild = props.children.toLowerCase();
    }

    if (capitalize) {
      newChild = capitalizeText(props.children);
    }

    if (capitalizeEach) {
      newChild = capitalizeEachWords(props.children);
    }

    if (thousand) {
      newChild = thousandSeparator(props.children);
    }
  }

  return newChild;
};
