let darkMode = document.getElementById('dark');
let lightMode = document.getElementById('light');
let background = document.getElementById('background');

darkMode.onclick = function () {
  background.style.backgroundColor = '#000';
  darkMode.style.color = '#aaa';

  lightMode.style.color = '#aaa';
};
lightMode.onclick = function () {
  background.style.backgroundColor = '#ffffff';
  lightMode.style.color = '#000';
  darkMode.style.color = '#000';
};
