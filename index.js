const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

//CRUD Creat, Read, Update, Delete

const cursos = ['Node JS', 'Java Script', 'React Native'];

//Middleware Global
server.use((req, res, next)=>{
  console.log('URL CHAMADA: ${req.url}');

  return next();
});

function checkCurso(req, res, next){
  if(!req.body.name){
    return res.status(400).json({ error: "Nome do curso é obrigatorio"});
  }

  return next();
}

server.get('/cursos', (req, res)=> {
  return res.json(cursos);
});


server.get('/cursos/:index', (req, res) => {
  const { index } =req.params;

  return res.json(cursos[index]);

});


//Criando um novo curso
server.post('/curso', checkCurso, (req, res)=> {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', checkCurso, (req, res)=>{
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
  
});


//Excluindo algum curso
server.delete('/cursos/:index', (req, res)=> {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.send();
})

server.listen(3000);