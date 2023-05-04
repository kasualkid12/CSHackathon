document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h1');
  header.innerText = 'a!!';
  document.querySelector('body').appendChild(header);
  const wordNodes = document.querySelectorAll('p');
  wordNodes.forEach((e) => e.remove());
});
