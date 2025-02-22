const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
let currentProject = 0;
const projects = document.querySelectorAll('.project-card');
setInterval(() => {
  projects[currentProject].classList.toggle('highlight');
  currentProject = (currentProject + 1) % projects.length;
  projects[currentProject].classList.toggle('highlight');
}, 3000);
