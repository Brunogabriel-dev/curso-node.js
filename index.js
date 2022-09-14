const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

//CRUD Creat, Read, Update, Delete

const cursos = ['Node JS', 'Java Script', 'React Native'];

server.get('/cursos', (req, res)=> {
  return res.json(cursos);
});


// localhost:3000/curso
server.get('/cursos/:index', (req, res) => {
  const { index } =req.params;

  return res.json(cursos[index]);

})

server.listen(3000);