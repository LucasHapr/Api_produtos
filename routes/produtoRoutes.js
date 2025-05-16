const express = require("express");
const router = express.Router();
const controller = require("../controllers/produtoController");

router.get("/", controller.getTodosProdutos);
router.get("/:id", controller.getProdutoPorId);
router.get("/nome/:nome", controller.getProdutoPorNome);
router.post("/", controller.criarProduto);
router.put("/:id", controller.atualizarProduto);
router.delete("/:id", controller.deletarProduto);

module.exports = router;
