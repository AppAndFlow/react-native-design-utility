import get from 'lodash.get';
import * as React from 'react';

interface IProps {
  rows?: number[];
  children?: React.ReactNode;
}

export const boxRowsUtils = (props: IProps) => {
  let newChild = props.children;

  const rows = get(props, 'rows');

  if (rows && Array.isArray(rows)) {
    newChild = React.Children.map(
      // @ts-ignore
      props.children,
      (child: React.ReactElement<any, any>, i) => {
        if (child.type === 'Box' || child.type.displayName === 'Box') {
          return React.cloneElement(child, {
            f: rows[i] || 1,
          });
        }

        throw new Error('Each child for a Box with rows need to be a Box');
      },
    );
  }

  return newChild;
};
