import fs from 'fs';
import { compile } from 'ejs';

export function ejs2html(filename, srcDir, outDir) {
  const srcFile = srcDir + filename;
  const outFile = outDir + filename.replace('.ejs', '.html');

  fs.writeFileSync(outFile, compileEJS(srcFile));
}

export function compileEJS(path) {
  const content = fs.readFileSync(path, { encoding: 'utf8' });
  const template = compile(content, { filename: path });

  return template();
}
