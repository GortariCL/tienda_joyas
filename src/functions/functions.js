const joyas = require('../data/joyas');

const arrJoyas = joyas.results;
//Requerimiento 1
const HATEOASV1 = () =>
  arrJoyas.map((j) => {
    return {
      name: j.name,
      href: `http://localhost:3000/joya/${j.id}`
    }
  });
//Requerimiento 2
const HATEOASV2 = () => {
  return arrJoyas.map((j) => {
    return {
      joya: j.name,
      src: `http://localhost:3000/joya/${j.id}`
    }
  });
}
//Requerimientos 1-2
const joya = (id) => {
  return arrJoyas.find((j) => j.id == id);
}
//Validacion categoria
const categoria = (category) => {
  return arrJoyas.find((j) => j.category == category);
}
//Requerimiento 3
const filtroByCategory = (category) => {
  return arrJoyas.filter((j) => j.category === category);
}
//Requerimiento 4
const fieldsSelect = (joya, fields) => {
  for(property in joya){
    if(!fields.includes(property)) delete joya[property];
  }
  return joya;
}
//Requerimiento 7
const orderValues = (order) => {
  return order == 'asc' ? arrJoyas.sort((a, b) => 
  (a.value > b.value ? 1 : -1)) : order == 'desc' ? arrJoyas.sort((a, b) => (a.value < b.value ? 1 : -1)) : false;
}

module.exports = { 
    HATEOASV1, 
    HATEOASV2, 
    joya,
    filtroByCategory,
    fieldsSelect,
    orderValues,
    categoria
}