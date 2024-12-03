🧑‍⚕️ BarberShop
BarberShop é uma aplicação para gerenciar os agendamentos, clientes, barbeiros, cortes, preços e feedbacks de um salão de barbearia. O sistema permite que os clientes agendem horários, os barbeiros visualizem seus compromissos, e os administradores tenham controle sobre todos os aspectos da barbearia.

📑 Sumário
Instalação
Configuração
Rotas da API
Sobre o Sistema

---------------
💻 Instalação
Pré-requisitos
Antes de começar, você precisará instalar as seguintes ferramentas:

Node.js (versão 14 ou superior)
MySQL (para o banco de dados)
Expo (para rodar na plataforma mobile)
---------------
Configuração
Clone o repositório:

git clone https://github.com/seu-usuario/BarberShop
cd barbershop
Instale as dependências:

npm install
Inicie o servidor:

npm start
O servidor estará em execução no endereço http://localhost:3000.

-------------------------------
📦 Dependências do Projeto
express: Framework para configurar rotas e gerenciar requisições HTTP.
mysql2: Biblioteca para conectar o Node.js ao MySQL.
dotenv: Carregar variáveis de ambiente de um arquivo .env.
cors: Middleware para habilitar o CORS nas requisições da API.

-----------------
📝 Documentação da API
A documentação da API está disponível em http://localhost:3000/documentation.
--------------------
🏗️ Estrutura do Banco de Dados
Tabelas
Usuario: Armazena informações dos clientes e administradores.

Campos: id, nome, email, senha, role (admin/user)
Barbeiro: Armazena informações dos barbeiros.

Campos: id, nome, especialidade, telefone, Hospital_id (chave estrangeira)
Corte: Armazena informações sobre os cortes disponíveis.

Campos: id, nome, preço, descrição
Agendamento: Armazena informações sobre os agendamentos dos clientes.

Campos: id, data, hora, Cliente_id, Barbeiro_id, Corte_id
Feedback: Armazena feedbacks dos clientes sobre os barbeiros.

Campos: id, Cliente_id, Barbeiro_id, comentário, avaliação (1 a 5)
----------------
🚀 Rotas da API
Usuários
GET /usuarios: Retorna todos os usuários.
POST /usuarios: Cria um novo usuário (cliente ou administrador).
PUT /usuarios/:id: Atualiza um usuário pelo ID.
DELETE /usuarios/:id: Deleta um usuário pelo ID.
--
Barbeiros
GET /barbeiros: Retorna todos os barbeiros.
POST /barbeiros: Cria um novo barbeiro.
PUT /barbeiros/:id: Atualiza um barbeiro pelo ID.
DELETE /barbeiros/:id: Deleta um barbeiro pelo ID.
--
Cortes
GET /cortes: Retorna todos os cortes disponíveis.
POST /cortes: Cria um novo corte.
PUT /cortes/:id: Atualiza um corte pelo ID.
DELETE /cortes/:id: Deleta um corte pelo ID.
--
Agendamentos
GET /agendamentos: Retorna todos os agendamentos.
POST /agendamentos: Cria um novo agendamento.
PUT /agendamentos/:id: Atualiza um agendamento pelo ID.
DELETE /agendamentos/:id: Deleta um agendamento pelo ID.
--
Feedbacks
GET /feedbacks: Retorna todos os feedbacks.
POST /feedbacks: Cria um novo feedback.
PUT /feedbacks/:id: Atualiza um feedback pelo ID.
DELETE /feedbacks/:id: Deleta um feedback pelo ID.

---------------------
🏢 Sobre o Sistema
O sistema BarberShop foi projetado para facilitar o agendamento de cortes de cabelo, feedbacks dos clientes e gerenciamento da equipe de barbeiros em um salão. Ele é dividido em duas áreas principais: clientes e administradores.

Clientes podem agendar horários com barbeiros, selecionar o tipo de corte desejado, visualizar seus agendamentos e deixar feedbacks sobre o atendimento.
Barbeiros podem visualizar os agendamentos para seus cortes e interagir com os clientes durante o atendimento.
Administradores têm controle total sobre os usuários, barbeiros, cortes e agendamentos, além de poder visualizar todos os feedbacks e tomar ações conforme necessário.
Com esse sistema, os salões de barbearia podem ter um controle mais eficiente e organizado, além de oferecer uma experiência mais fluida e transparente para os clientes.
