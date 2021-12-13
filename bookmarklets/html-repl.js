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
const cel = (nodeName, styles = {}) => {
  const el = document.createElement(nodeName);
  Object.assign(el.style, styles);
  return el;
};

const el = cel('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '110vw',
  height: '100vh',
  background: 'white',
});
document.body.appendChild(el);

const close = document.createElement('button');
close.innerText = 'close';
close.addEventListener('click', () => el.remove());

const title = document.createElement('h1');
title.innerText = 'html-repl';
title.appendChild(close);
el.appendChild(title);

const layout = cel('div', {
  display: 'flex',
  flexDirection: 'column',
});
el.appendChild(layout);

const previewer = document.createElement('div');

const editor = cel('textarea', {
  margin: '1em 0',
  padding: '1em',
  border: 'none',
  fontSize: '20px',
  background: '#eee',
});
const changeListener = debounce(300, ({ target: { value: html } }) => {
  previewer.innerHTML = html;
});
editor.addEventListener('input', changeListener);
editor.addEventListener('change', changeListener);
editor.placeholder = '<h1>Hello world</h1>';

layout.appendChild(editor);
layout.appendChild(previewer);
