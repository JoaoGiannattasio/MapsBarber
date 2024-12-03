BarberShop
BarberShop é uma aplicação para gerenciar um salão de barbeiro, incluindo agendamentos, clientes, barbeiros e serviços.

Sumário
Instalação

Configuração
git clone https://github.com/SEU_USUARIO/BarberShop
cd BarberShop

npm install
npm start

Rotas da API

Sobre o Sistema

Instalação
Para configurar o projeto localmente, siga as etapas abaixo.

Pré-requisitos
Node.js(versão 14 ou superior)

MySQL (para o banco de dados)

Expo (para rodar na plataforma mobile)

Configuração
Clone o repositório:

bash
git clone https://github.com/SEU_USUARIO/BarberShop
cd BarberShop
Instale as dependências:

bash
npm install
Inicie o servidor:

bash
npm start
O servidor estará em execução no endereço http://localhost:8081.

Dependências do Projeto
express: Framework para configurar rotas e gerenciar requisições HTTP.

mysql2: Biblioteca para conectar o Node.jsao MySQL.

dotenv: Carregar variáveis de ambiente de um arquivo .env.

Documentação da API
A documentação da API está disponível em http://localhost:8081/documentation.

Estrutura do Banco de Dados
Tabelas
Barbeiro Armazena informações dos barbeiros.

Campos: id, nome, telefone, email, especialidade, senha

Cliente Armazena informações dos clientes.

Campos: id, nome, telefone, email, senha

Agendamento Armazena informações sobre os agendamentos realizados.

Campos: id, data, hora, Barbeiro_id (chave estrangeira), Cliente_id (chave estrangeira), servico

Rotas da API
A API oferece operações CRUD para cada uma das entidades no sistema. Aqui estão o exemplo das principais rotas para a entidade Barbeiro:

GET /barbeiro: Retorna todos os barbeiros.

POST /barbeiro: Cria um novo barbeiro.

PUT /barbeiro/:id: Atualiza um barbeiro pelo ID.

DELETE /barbeiro/:id: Deleta um barbeiro pelo ID.

Sobre o Sistema
O sistema foi planejado e desenvolvido para facilitar o gerenciamento de um salão de barbeiro, permitindo que os barbeiros e clientes agendem serviços de forma prática e eficiente. Ele será utilizado exclusivamente pelo salão, que será responsável pelo cadastro de clientes e barbeiros, além de gerenciar os agendamentos e serviços oferecidos.
