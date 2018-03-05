import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import { ejs2html } from './src/utils/ejs';

mkdirp.sync('dist');

const srcDir = __dirname + '/src/views/pages/';
const outDir = __dirname + '/dist/';

const files = fs.readdirSync(srcDir);

files.forEach(filename => {
  ejs2html(filename, srcDir, outDir);
});
