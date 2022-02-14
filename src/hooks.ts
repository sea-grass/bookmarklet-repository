import { rehype } from 'rehype';
import rehypePresetMinify from 'rehype-preset-minify';
async function minify(html) {
  return rehype().use(rehypePresetMinify).processSync(html);
  console.log('gonna minify', html);
  return html;
}

export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (response.headers['content-type'] === 'text/html') {
    const body = await minify(response.body);
    return {
      ...response,
      body,
    };
  }

  return response;
}
