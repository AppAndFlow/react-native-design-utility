module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['<rootDir>/test/**/?(*.)(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'node'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
};
