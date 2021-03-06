// Esse arquivo tem como resposabilidade cadastrar as rotas da aplicação

const express = require("express");

const routes = express.Router();

const alunoController = require("./controller/alunoController");
const postagemController = require("./controller/postagemController");
const comentarioController = require("./controller/comentarioController");
const sessaoController = require("./controller/sessaoController");
const autorizacaoMid = require("./middlewares/autorizacao");

// Rotas públicas
routes.post("/alunos/cadastrar", alunoController.store);

routes.post("/sessao", sessaoController.store);

routes.use(autorizacaoMid)

// Rota - Alunos
routes.get("/alunos", alunoController.index);
routes.get("/alunos/:id", alunoController.buscarPorId);


// Rota - Postagens
routes.get("/postagens", postagemController.index);
routes.post("/postagens/cadastrar", postagemController.store);
routes.delete("/postagens/deletar/:id", postagemController.delete);

// Rota - Comentários
routes.get("/postagens/:id/comentarios", comentarioController.index);
routes.post("/postagens/:id/comentarios", comentarioController.store);

module.exports = routes;