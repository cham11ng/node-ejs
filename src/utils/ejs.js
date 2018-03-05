import fs from 'fs';
import ejs from 'ejs';

export function ejs2html(filename, srcDir, outDir) {
  const srcFile = srcDir + filename;
  const outFile = outDir + filename.replace('.ejs', '.html');

  fs.writeFileSync(outFile, compile(srcFile));
}

export function compile(path) {
  const content = fs.readFileSync(path, { encoding: 'utf8' });
  const template = ejs.compile(content, { filename: path });

  return template();
}
