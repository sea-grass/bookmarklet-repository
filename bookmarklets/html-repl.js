const debounce = (interval, callback) => {
	let timeout;

	return function () {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			callback(...arguments);
			timeout = null;
		}, interval);
	};
};

const el = document.createElement('div');
el.style.position = 'absolute';
el.style.top = 0;
el.style.left = 0;
el.style.width = '100vw';
el.style.height = '100vh';
el.style.background = 'white';
document.body.appendChild(el);

const close = document.createElement('button');
close.innerText = 'close';
close.addEventListener('click', () => el.remove());

const title = document.createElement('h1');
title.innerText = 'html-repl';
title.appendChild(close);
el.appendChild(title);

const layout = document.createElement('div');
layout.style.display = 'flex';
layout.style.flexDirection = 'column';
el.appendChild(layout);

const previewer = document.createElement('div');

const editor = document.createElement('textarea');
const changeListener = debounce(300, ({ target: { value: html } }) => {
	previewer.innerHTML = html;
});
editor.addEventListener('input', changeListener);
editor.addEventListener('change', changeListener);
editor.style.margin = '1em 0';
editor.style.padding = '1em';
editor.style.border = 'none';
editor.style.fontSize = '20px';
editor.style.background = '#eee';
editor.placeholder = '<h1>Hello world</h1>';

layout.appendChild(editor);
layout.appendChild(previewer);
