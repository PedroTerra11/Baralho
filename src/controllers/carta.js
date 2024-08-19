const db = [];
const naipe_controller = require("./naipe.js")
let nextId = 1

const model = (carta, id = nextId++) => {
  if (carta.nome != undefined && carta.nome != "" && carta.id_naipe != undefined && naipe_controller.show(carta.id_naipe)) {
    return {
      id,
      nome: carta.nome,
      id_naipe: carta.id_naipe
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
    destroy, store, show, index, update
}
