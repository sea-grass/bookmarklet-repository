import glob from 'glob';
import fs from 'fs';
import { cwd } from 'process';
import { join, relative, resolve } from 'path';

const { readFile, stat } = fs.promises;

const BOOKMARKLET_DIR = resolve(cwd(), 'bookmarklets');

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

	const contents = await readFile(path);

	const parts = file.split('/');
	const name = parts[parts.length - 1];

	const pre = `<pre><code>${contents}</pre></code>`;
	const url = `javascript:${contents}`;

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
