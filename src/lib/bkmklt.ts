import glob from 'glob';
import fs from 'fs';
import { cwd } from 'process';
import { join, relative, resolve } from 'path';
import { minify } from 'terser';
import jsBeautify from 'js-beautify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import type { Bookmarklet } from './types';
hljs.registerLanguage('js', javascript);

const { readFile, stat } = fs.promises;
const { js: beautify } = jsBeautify;

const BOOKMARKLET_DIR = resolve(cwd(), 'bookmarklets');

const wrapBookmarkletCode = (code: string) => `(function(){${code}}());`;

class BookmarkletNotFoundError extends Error {
  message = 'Bookmarklet not found';
}
class GetAllBookmarkletsError extends Error {
  message = 'Could not get all bookmarklets';
}

export async function get(file: string): Promise<Bookmarklet> {
  const path = resolve(BOOKMARKLET_DIR, file + '.js');

  try {
    await stat(path);
  } catch (error) {
    console.error(error);
    throw new BookmarkletNotFoundError();
  }

  const code = await readFile(path).then(String);
  const url = await minify(code).then(({ code }) => `javascript:${wrapBookmarkletCode(code)}`);
  const pre = await Promise.resolve(beautify(code))
    .then(code => hljs.highlight(code, { language: 'js' }))
    .then(({ value: code }) => `<pre><code class='hljs'>${code}</code></pre>`);

  const parts = file.split('/');
  const name = parts[parts.length - 1];
  return {
    name,
    pre,
    url,
  };
}

export async function getAll(): Promise<string[]> {
  let files: string[];
  try {
    files = await new Promise<string[]>((resolve, reject) =>
      glob(join(BOOKMARKLET_DIR, '**/*.js'), (err, files) => {
        if (err) reject(err);
        else resolve(files);
      })
    );
  } catch (error) {
    console.error(error);
    throw new GetAllBookmarkletsError();
  }

  const paths = files.map(path => {
    // remove the .js file extension
    return relative(BOOKMARKLET_DIR, path).replace(/\.js$/, '');
  });

  const urls = paths.map(path => `/bookmarklet/${path}`);

  return urls;
}
