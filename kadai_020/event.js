const btn = document.getElementById('btn');
const h2 = document.getElementById('text');
btn.addEventListener('click', () => {
  console.log(h2.textContent);
  h2.textContent = 'ボタンをクリックしました';
  console.log(h2.textContent);
});