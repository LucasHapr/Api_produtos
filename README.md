# 🛒 API de Produtos - Desafio Técnico

API desenvolvida para um desafio técnico de back-end, com foco na criação de um CRUD completo de produtos utilizando MongoDB como banco de dados não relacional. A aplicação permite gerenciar produtos com as seguintes informações: nome, descrição, cor, peso, tipo, preço e data de cadastro.

## 🚀 Funcionalidades

- ✅ Listar todos os produtos
- 🔍 Buscar produto por ID
- 🔍 Buscar produto por Nome
- ➕ Cadastrar novo produto
- ✏️ Atualizar produto existente
- ❌ Remover produto por ID

## 🧑‍💻 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [Render](https://render.com/) (deploy)

## 🔗 Documentação Swagger

Acesse a documentação pública da API:

👉 [https://api-produtos-j4o3.onrender.com/api-docs](https://api-produtos-j4o3.onrender.com/api-docs)


## 🌐 URL base da API

https://api-produtos-j4o3.onrender.com


## 🛠️ Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/api-produtos.git
cd api-produtos
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo .env com a variável:
```bash
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/produtos?retryWrites=true&w=majority
PORT=3000
```

4. Inicie o servidor:
```bash
npm run dev
```

Acesse em: `http://localhost:3000/api-docs`

## 🧩 Estrutura dos Dados

```json
{
  "nome": "Tênis Esportivo",
  "descricao": "Tênis confortável para corrida",
  "cor": "Azul",
  "peso": 0.9,
  "tipo": "Calçado",
  "preco": 199.99,
  "dataCadastro": "2025-05-12T19:00:00Z"
}
```