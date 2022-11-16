const btn1 = document.getElementsByTagName('main')[0];
const btn2 = document.getElementsByTagName('main')[1];
const btn3 = document.getElementsByTagName('main')[2];
const btn4 = document.getElementsByTagName('main')[3];
const wndw = document.body;

btn1.addEventListener('click', () => {
    wndw.classList.toggle('ubah');
});
btn2.addEventListener('click', () => {
    wndw.classList.toggle('ubah1');
});
btn3.addEventListener('click', () => {
    wndw.classList.toggle('ubah2');
});
btn4.addEventListener('click', () => {
    wndw.classList.toggle('ubah3');
});