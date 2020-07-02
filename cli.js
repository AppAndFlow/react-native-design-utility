#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const meow = require('meow');

meow(`
	Usage
	  $ react-native-design-utility init
`);

fs.copySync(
  path.join(__dirname, './theme.js'),
  path.join(process.cwd(), 'theme.js'),
);
