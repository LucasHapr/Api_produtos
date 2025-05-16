const Produto = require("../models/Produto");

// [GET] Listar todos os produtos
exports.getTodosProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [GET] Buscar produto por ID
exports.getProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [GET] Buscar produto por nome
exports.getProdutoPorNome = async (req, res) => {
  try {
    const produto = await Produto.findOne({ nome: req.params.nome });
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// [POST] Cadastrar novo produto
exports.criarProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// [PUT] Atualizar produto
exports.atualizarProduto = async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!produtoAtualizado) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// [DELETE] Remover produto
exports.deletarProduto = async (req, res) => {
  try {
    const produtoRemovido = await Produto.findByIdAndDelete(req.params.id);
    if (!produtoRemovido) return res.status(404).json({ error: "Produto não encontrado" });
    res.json({ mensagem: "Produto removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
