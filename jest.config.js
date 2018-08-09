module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
};
