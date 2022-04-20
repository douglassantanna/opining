import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("conexão concluida");
});
const app = express();
app.use(express.json());

// const livros = [
//   { id: 1, titulo: "ola mundo" },
//   { id: 2, titulo: "ola terra" },
// ];

app.get("/", (req, res) => {
  res.status(200).send("Curso de nodis");
});

// Get all
app.get("/livros", (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });
});

// Get by ID
app.get("/livros/:id", (req, res) => {
  let index = buscarLivro(req.params.id);
  res.json(livros[index]);
});

//Create
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado");
});

//Update
app.put("/livros/:id", (req, res) => {
  let index = buscarLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

//Delete
app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscarLivro(id);
  livros.splice(index, 1);
  res.send(`livro ${id} excluido`);
});

function buscarLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
