import fs from 'fs';
import mkdirp from 'mkdirp';

import { ejs2html } from './utils/ejs';

mkdirp.sync('dist');

const srcDir = __dirname + '/pages/';
const outDir = __dirname + '/../dist/';

const files = fs.readdirSync(srcDir);

files.forEach(filename => {
  ejs2html(filename, srcDir, outDir);
});
