const express = require('express');
const { HATEOASV1, HATEOASV2, joya } = require('./functions/functions');
const joyas = require('./data/joyas');
const app = express();
const port = 3000;

const arrJoyas = joyas.results;
//RUTA RAIZ
app.get('/', (req, res) => {
  res.send(arrJoyas);
});
//RUTA DINAMICA JOYA (ID)
app.get("/joya/:id", (req, res) => {
  const id = req.params.id;
  res.send(joya(id));
});
//RUTA V1 JOYAS
app.get('/api/v1/joyas', (req, res) => {
  res.send({
    joyas: HATEOASV1(),
  });
});
//RUTA V2 JOYAS
app.get('/api/v2/joyas', (req, res) => {
  res.send({
    joyas: HATEOASV2(),
  });
});
//SERVER
app.listen(port, () => console.log(`Your app listening on port ${port}`));