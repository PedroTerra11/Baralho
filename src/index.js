const express = require("express");
const naipe_controller = require("./controllers/naipe");
const app = express();
const port = 3000;


app.post("/nipe", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.store(naipe);
  res.status(code).json();
});

app.get("/nipe", (req, res) => {
  const naipes = naipe_controller.index();
  res.json(naipes);
});

app.get("/nipe/:id", (req, res) => {
  const naipe = naipe_controller.show(req.params.id);
  res.json(naipe);
});

app.put("/nipe/:id", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.update(req.params.id, naipe);
  res.status(code).json();
});

app.put("/nipe/:id", (req, res) => {
  naipe_controller.destroy(req.params.id);
  res.json();
});

app.listen(port, () => {
    console.log(`Servidor inciado na porta ${port}`)
})
