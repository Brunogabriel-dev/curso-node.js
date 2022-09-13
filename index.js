const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

// localhost:3000/curso
server.get('/curso', (req, res) => {
  const nome =req.query.nome;

  return res.json({ curso: `Aprendendo ${nome}`});

})

server.listen(3000);