import glob from 'glob';
import fs from 'fs';
import { cwd } from 'process';
import { join, relative, resolve } from 'path';
import { minify } from 'terser';
import jsBeautify from 'js-beautify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('js', javascript);

const { readFile, stat } = fs.promises;
const { js: beautify } = jsBeautify;

const BOOKMARKLET_DIR = resolve(cwd(), 'bookmarklets');

const wrapBookmarkletCode = (code: string) => {
  return `(function(){${code}}());`;
};

interface Bookmarklet {
  name: string;
  pre: string;
  url: string;
}

type Get = Bookmarklet;

export async function get(file: string): Promise<Get | Error> {
  const path = resolve(BOOKMARKLET_DIR, file + '.js');

  try {
    await stat(path);
  } catch (error) {
    return new Error('not found');
  }

  const code = await readFile(path).then(String);
  const { code: minifiedCode } = await minify(code);
  const beautifiedCode = beautify(code);

  const { value: highlightedCode } = hljs.highlight(beautifiedCode, {
    language: 'js',
  });
  const pre = `<pre><code class='hljs'>${highlightedCode}</code></pre>`;
  const url = `javascript:${wrapBookmarkletCode(minifiedCode)}`;

  const parts = file.split('/');
  const name = parts[parts.length - 1];
  return {
    name,
    pre,
    url,
  };
}

type BookmarkletPath = string;

interface GetAll {
  paths: BookmarkletPath[];
}

export async function getAll(): Promise<GetAll | Error> {
  let files: string[];
  try {
    files = await new Promise<string[]>((resolve, reject) =>
      glob(join(BOOKMARKLET_DIR, '**/*.js'), (err, files) => {
        if (err) reject(err);
        else resolve(files);
      })
    );
  } catch (error) {
    return new Error(error.message);
  }

  const paths = files.map(path => {
    // remove the .js file extension
    return relative(BOOKMARKLET_DIR, path).replace(/\.js$/, '');
  });

  return {
    paths,
  };
}
