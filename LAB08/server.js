const http = require('http');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

// Simula banco de usuários (array na memória)
const usuarios = [];

// Rota raiz deve redirecionar para Projects.html (página de projetos)
app.get('/', (req, res) => {
  res.redirect('../login.html');
});

// Rota para abrir o formulário de cadastro
app.get('/cadastra', (req, res) => {
  res.sendFile(__dirname + '/public/Cadastro.html');
});

// Recebe cadastro (POST), salva e responde com página dinâmica
app.post('/cadastra', (req, res) => {
  const { usuario, senha, email, time } = req.body;

  if (!usuario || !senha || !email || !time) {
    return res.render('resposta', { status: 'Erro: Preencha todos os campos.' });
  }

  // Verifica se usuário já existe
  const jaExiste = usuarios.find(u => u.usuario === usuario);
  if (jaExiste) {
    return res.render('resposta', { status: 'Erro: Usuário já cadastrado.' });
  }

  usuarios.push({ usuario, senha, email, time });

  res.render('resposta', { status: `Usuário ${usuario} cadastrado com sucesso!` });
});

// Rota para abrir o formulário de login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/Login.html');
});

// Recebe login (POST), valida e responde com página dinâmica
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.render('resposta', { status: 'Preencha usuário e senha.' });
  }

  const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (user) {
    res.render('resposta', { status: `Login realizado com sucesso. Bem-vindo, ${usuario}!` });
  } else {
    res.render('resposta', { status: 'Usuário ou senha inválidos.' });
  }
});

// Rota /cadastro (GET) para responder dados do formulário antigo
app.get('/cadastro', (req, res) => {
  const { nome, sobrenome, nascimento, civil } = req.query;
  res.render('resposta', { nome, sobrenome, nascimento, civil });
});

