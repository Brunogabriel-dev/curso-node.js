const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['Node JS', 'JavaScript', 'React Native'];


// localhost:3000/curso
server.get('/curso/:index', (req, res) => {
  const { index } =req.params;

  return res.json(cursos[index]);

})

server.listen(3000);