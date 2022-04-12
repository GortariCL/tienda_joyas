const express = require('express');
const { HATEOASV1, HATEOASV2, joya, filtroByCategory, fieldsSelect, orderValues, categoria } = require('./functions/functions');
const app = express();
const port = 3000;

//RUTA RAIZ
app.get('/', (req, res) => {
  res.send('Oh wow! this is working =)');
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
  //Requerimiento 7
  const { values } = req.query;
  if(values == 'asc') return res.send(orderValues('asc'));
  if(values == 'desc') return res.send(orderValues('desc'));
  //Requqrimiento 6
  if (req.query.page) {
    const { page } = req.query;
    return res.send({ joyas: HATEOASV2().slice(page * 2 - 2, page * 2) })
  }
  res.send({
    joyas: HATEOASV2(),
  });
});
//Requrimiento 3
app.get('/api/v2/joyas/:category', (req, res) => {
  const { category } = req.params;
  categoria(category) ?
  res.send({
    cant: filtroByCategory(category).length,
    joyas: filtroByCategory(category),
  }) : res.status(404).send({
    error: '404 Not Found',
    message: `No existe la categoria ${category}`,
  });
});
//Requerimiento 4
app.get('/api/v2/joya/:id', (req, res) => {
  const { id } = req.params;
  const { fields } = req.query;
  if (fields) return res.send({ joya: fieldsSelect(joya(id), fields.split(',')) });
  //Requerimiento 5
  joya(id) ? res.end({
    joya: joya(id)
  })
    : res.status(404).send({
      error: '404 Not Found',
      message: `No existe alguna joya con el ID numero ${id}`,
    });
  res.send({
    joya: joya(id),
  })
});
//SERVER
app.listen(port, () => console.log(`Your app listening on port ${port}`));