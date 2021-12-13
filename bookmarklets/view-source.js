const sourceWindow = document.createElement('div');
Object.assign(sourceWindow.style, {
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  position: 'absolute',
  top: 0,
  left: '4px',
  height: '100vh',
  background: 'white',
  outline: '4x dotted red',
});
document.body.appendChild(sourceWindow);

const close = document.createElement('button');
close.innerText = 'close';
close.addEventListener('click', () => sourceWindow.remove());

const title = document.createElement('h1');
title.innerText = 'view-source';
title.appendChild(close);
sourceWindow.appendChild(title);

const textarea = document.createElement('textarea');
textarea.style.resize = 'none';
textarea.disabled = true;
textarea.rows = 100;
textarea.cols = 100;
textarea.value = document.body.parentElement.outerHTML;
sourceWindow.appendChild(textarea);
