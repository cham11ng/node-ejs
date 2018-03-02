import fs from 'fs';
import ejs from 'ejs';
import mkdirp from 'mkdirp';

const outDir = '/dist/';
const srcDir = '/src/pages/';

function ejs2html(filename, information) {
  const path = __dirname + srcDir + filename;

  const content = fs.readFileSync(path, { encoding: 'utf8' });
  const template = ejs.compile(content, { filename: path });

  mkdirp.sync('dist');

  const output = path.replace(srcDir, outDir).replace('.ejs', '.html');
  fs.writeFileSync(output, template());
}

const files = fs.readdirSync(__dirname + '/src/pages');
files.forEach(value => ejs2html(value));
