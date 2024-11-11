const button = document.getElementById('button');
const output = document.getElementById('output');

let count = 0;

button.addEventListener('click', () => {
  count += 1;
  output.textContent = count;
});
