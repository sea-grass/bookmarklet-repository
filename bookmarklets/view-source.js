const sourceWindow = document.createElement('div');
sourceWindow.style.display = 'flex';
sourceWindow.style.flexDirection = 'column';
sourceWindow.style.zIndex = 1000;
sourceWindow.style.position = 'absolute';
sourceWindow.style.top = 0;
sourceWindow.style.left = '4px';
sourceWindow.style.height = '100vh';
sourceWindow.style.background = 'white';
sourceWindow.style.outline = '4px dotted red';
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
