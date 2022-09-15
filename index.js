const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

//CRUD Creat, Read, Update, Delete

const cursos = ['Node JS', 'Java Script', 'React Native'];

server.get('/cursos', (req, res)=> {
  return res.json(cursos);
});


server.get('/cursos/:index', (req, res) => {
  const { index } =req.params;

  return res.json(cursos[index]);

});


//Criando um novo curso
server.post('/curso', (req, res)=> {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', (req, res)=>{
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
  
});

server.listen(3000);