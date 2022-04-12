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

module.exports = { 
    HATEOASV1, 
    HATEOASV2, 
    joya
}