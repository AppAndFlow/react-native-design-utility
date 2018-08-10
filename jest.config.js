module.exports = {
  preset: 'react-native',
  transform: { '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testMatch: ['<rootDir>/test/**/?(*.)(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
};
