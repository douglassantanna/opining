import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de node.jaiés" });
  });

  //usando as outras rotas. Neste caso existe apenas rota 'livros' por enquanto
  app.use(express.json(), livros, autores);
};

export default routes;
