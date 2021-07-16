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

const wrapBookmarkletCode = (code) => {
	return `(function(){${code}}());`;
};

interface Bookmarklet {
	name: string;
	pre: string;
	url: string;
}

type Get = Bookmarklet;

interface GetError {
	error: string;
}

export async function get(file: string): Promise<Get | GetError> {
	const path = resolve(BOOKMARKLET_DIR, file + '.js');
	console.log(path);

	try {
		const stats = await stat(path);
	} catch (error) {
		return {
			error: 'not found'
		};
	}

	const code = await readFile(path).then(String);
	const { code: minifiedCode } = await minify(code);
	const beautifiedCode = beautify(code);

	const { value: highlightedCode } = hljs.highlight(beautifiedCode, {
		language: 'js'
	});
	const pre = `<pre><code>${highlightedCode}</code></pre>`;
	const url = `javascript:${wrapBookmarkletCode(minifiedCode)}`;

	const parts = file.split('/');
	const name = parts[parts.length - 1];
	return {
		name,
		pre,
		url
	};

	return {
		error: 'not found'
	};
}

type BookmarkletPath = string;

interface GetAll {
	paths: BookmarkletPath[];
}

interface GetAllError {
	error: string;
}

export async function getAll(): Promise<GetAll | GetAllError> {
	let files;
	try {
		files = await new Promise((resolve, reject) =>
			glob(join(BOOKMARKLET_DIR, '**/*.js'), (err, files) => {
				if (err) reject(err);
				else resolve(files);
			})
		);
	} catch (error) {
		return {
			error
		};
	}

	console.log(BOOKMARKLET_DIR);
	console.log(files);

	const paths = files.map((path) => {
		// remove the .js file extension
		return relative(BOOKMARKLET_DIR, path).replace(/\.js$/, '');
	});

	return {
		paths
	};
}
