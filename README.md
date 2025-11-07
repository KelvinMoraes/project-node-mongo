Projeto: Node.js + MongoDB (MVC) — Cadastro de Produtos

Resumo:
CRUD de Produtos usando Node.js (Express) + MongoDB (driver nativo), padrão MVC, views em Handlebars e padronização de código com ESLint + Prettier.

Stack:

Node.js / Express

MongoDB (driver nativo)

Handlebars (layouts, partials)

ESLint + Prettier

Funcionalidades:

Listar produtos

Criar produto (nome, imagem, preço, descrição)

(Opcional) Editar / Excluir produtos

Layout básico em Handlebars

Estrutura (resumo):
/controllers -> ProductController.js
/db -> conn.js (connect/getDb)
/models -> Product.js
/public -> css, imgs
/routes -> productsRoutes.js
/views
/layouts -> main.handlebars
/products -> all.handlebars, create.handlebars
.eslintrc.json, .prettierrc, .editorconfig

Como rodar:

npm install

Certifique-se que o MongoDB está ativo em mongodb://127.0.0.1:27017
(se usar .env: MONGO_URL=mongodb://127.0.0.1:27017/seu_db)

Desenvolvimento:

npm run dev (com nodemon) ou

node index.js

Scripts (package.json):
start: node index.js
dev: nodemon index.js
lint: eslint .
lint:fix: eslint . --fix
fmt: prettier --check .
fmt:fix: prettier --write .

Rotas (exemplo):
GET /products -> lista produtos
GET /products/createView -> formulário de criação
POST /products/createData -> cadastra produto

Notas de implementação:

No layout main.handlebars use {{{body}}} para não escapar HTML.

Conecte ao Mongo antes do app.listen.

Use o padrão em db/conn.js: connect() para abrir a conexão e getDb() dentro dos métodos/handlers.
