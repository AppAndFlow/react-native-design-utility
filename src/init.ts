'use strict';

import fs from 'fs-extra';
import path from 'path';

fs.copySync(
  path.join(__dirname, '../../theme.js'),
  path.join(process.cwd(), 'theme.js'),
);
