const express = require('express'); 
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Project.html'));
});

app.get('/Home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

app.get('/Project.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Project.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
