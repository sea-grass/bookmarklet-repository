import { base } from '$app/paths';

export default function resolve(path: string): string {
	const resolvedPath = path.startsWith('/') ? `${base}${path}` : path;
	return resolvedPath;
}
