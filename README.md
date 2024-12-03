# 🧑‍⚕️ BarberShop - Sistema de Agendamento de Barbearia

**BarberShop** é uma aplicação projetada para gerenciar agendamentos, clientes, barbeiros, cortes, preços e feedbacks de um salão de barbearia. O sistema permite que os clientes agendem horários, os barbeiros visualizem seus compromissos, e os administradores tenham controle total sobre todos os aspectos da barbearia.

## 📑 Sumário

- [📦 Instalação](#instalação)
- [🔧 Configuração](#configuração)
- [📝 Documentação da API](#documentação-da-api)
- [🏗️ Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [🚀 Rotas da API](#rotas-da-api)
- [🏢 Sobre o Sistema](#sobre-o-sistema)

---

## 📦 Instalação

### Clone este repositório:

```bash
git clone https://github.com/seu-usuario/BarberShop.git
Navegue até o diretório do projeto:
cd barbershop
Instale as dependências:
npm install
Inicie o servidor:
npm start

O servidor estará em execução no endereço:
http://localhost:3000

🔧 Configuração
Pré-requisitos
Antes de começar, você precisará ter instalado as seguintes ferramentas:

Node.js (versão 14 ou superior)
MySQL
Expo (para rodar na plataforma mobile)
Dependências do Projeto
express: Framework para configurar rotas e gerenciar requisições HTTP.
mysql2: Biblioteca para conectar o Node.js ao MySQL.
dotenv: Carregar variáveis de ambiente de um arquivo .env.
cors: Middleware para habilitar CORS nas requisições da API.
📝 Documentação da API
A documentação da API está disponível no Swagger.
Acesse a documentação clicando no link abaixo:
Documentação da API - Swagger

🏗️ Estrutura do Banco de Dados
O sistema utiliza um banco de dados MySQL com as seguintes tabelas:

Usuários
Armazena informações dos clientes e administradores.

Campos:

id
nome
email
senha
role (admin/user)
Barbeiros
Armazena informações dos barbeiros.

Campos:

id
nome
especialidade
telefone
Hospital_id (chave estrangeira)
Cortes
Armazena informações sobre os cortes disponíveis.

Campos:

id
nome
preço
descrição
Agendamentos
Armazena informações sobre os agendamentos dos clientes.

Campos:

id
data
hora
Cliente_id (chave estrangeira)
Barbeiro_id (chave estrangeira)
Corte_id (chave estrangeira)
Feedback
Armazena feedbacks dos clientes sobre os barbeiros.

Campos:

id
Cliente_id (chave estrangeira)
Barbeiro_id (chave estrangeira)
comentário
avaliação (1 a 5)
🚀 Rotas da API
Usuários
GET /usuarios: Retorna todos os usuários.
POST /usuarios: Cria um novo usuário (cliente ou administrador).
PUT /usuarios/:id: Atualiza um usuário pelo ID.
DELETE /usuarios/:id: Deleta um usuário pelo ID.
Barbeiros
GET /barbeiros: Retorna todos os barbeiros.
POST /barbeiros: Cria um novo barbeiro.
PUT /barbeiros/:id: Atualiza um barbeiro pelo ID.
DELETE /barbeiros/:id: Deleta um barbeiro pelo ID.
Cortes
GET /cortes: Retorna todos os cortes disponíveis.
POST /cortes: Cria um novo corte.
PUT /cortes/:id: Atualiza um corte pelo ID.
DELETE /cortes/:id: Deleta um corte pelo ID.
Agendamentos
GET /agendamentos: Retorna todos os agendamentos.
POST /agendamentos: Cria um novo agendamento.
PUT /agendamentos/:id: Atualiza um agendamento pelo ID.
DELETE /agendamentos/:id: Deleta um agendamento pelo ID.
Feedbacks
GET /feedbacks: Retorna todos os feedbacks.
POST /feedbacks: Cria um novo feedback.
PUT /feedbacks/:id: Atualiza um feedback pelo ID.
DELETE /feedbacks/:id: Deleta um feedback pelo ID.
🏢 Sobre o Sistema
O sistema BarberShop foi projetado para facilitar o agendamento de cortes de cabelo, feedbacks dos clientes e gerenciamento da equipe de barbeiros em um salão. Ele é dividido em duas áreas principais: clientes e administradores.

Funcionalidades:
Clientes:
Podem agendar horários com barbeiros, selecionar o tipo de corte desejado, visualizar seus agendamentos e deixar feedbacks sobre o atendimento.

Barbeiros:
Podem visualizar os agendamentos para seus cortes e interagir com os clientes durante o atendimento.

Administradores:
Têm controle total sobre os usuários, barbeiros, cortes e agendamentos, além de poder visualizar todos os feedbacks e tomar ações conforme necessário.

Benefícios:
Com esse sistema, os salões de barbearia podem ter um controle mais eficiente e organizado, além de oferecer uma experiência mais fluida e transparente para os clientes.

🎉 Contribua para o Projeto
Como Contribuir:
Faça o fork deste repositório.
Crie uma nova branch (git checkout -b minha-nova-feature).
Faça suas modificações e commit (git commit -am 'Adiciona nova funcionalidade').
Envie suas modificações para o branch (git push origin minha-nova-feature).
Crie um novo Pull Request para revisão.
📜 Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

👨‍💻 Desenvolvido com ❤️ por Seu Nome.

### Detalhes da estrutura do README:

- **Links de navegação**: A documentação usa links internos (`[título](#link)`) para facilitar a navegação e tornar o documento mais interativo e organizado.
- **Ícones**: Emojis são usados para tornar a leitura mais visualmente atraente.
- **Markdown**: A formatação foi estruturada com cabeçalhos, listas, blocos de código, links e outras características do Markdown para tornar a documentação clara e fácil de ler.
  
Você pode copiar e colar o conteúdo acima no seu arquivo `README.md`. Assim, ele ficará bem estruturado e organizado para que qualquer desenvolvedor ou usuário possa entender rapidamente o funcionamento e como configurar o projeto.
