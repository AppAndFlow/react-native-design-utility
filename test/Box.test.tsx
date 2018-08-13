import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import Box from '../lib/components/Box';
import { UtilityThemeProvider } from '../lib/Provider';

const Wrapper: React.SFC = props => (
  <UtilityThemeProvider>{props.children}</UtilityThemeProvider>
);

describe('<Box />', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <Wrapper>
        <Box />
      </Wrapper>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
