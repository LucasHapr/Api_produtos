const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: String,
  cor: String,
  peso: Number,
  tipo: String,
  preco: {
    type: Number,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Produto", produtoSchema);
