import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id)
    .populate("autor", "nome")
    .exec((err, livros) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - id não encontrado` });
      }
      res.status(200).send(livros);
    });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} = falha ao cadastrar livro.` });
      res.status(200).send(livro.toJSON());
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro excluído" });
      } else res.status(500).send({ message: err.message });
    });
  };

  static listarLivrosPorEditora = (req, res) => {
    const editora = req.query.editora;
    //filtrando pelo campo editora. Obj vazio é uma query
    livros.find({'editora': editora}, {}, (err, livros) => {
      res.status(200).send(livros);
    })
  }
}

export default LivroController;
