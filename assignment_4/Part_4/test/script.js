const startButton = document.querySelector('.start-button');
const content = document.querySelector('.content');

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  document.body.style.backgroundColor = 'white';
  content.style.display = 'block';
});