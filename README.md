<h1 align="center">
  <br>
  <img src="https://github.com/JoaoGiannattasio/MapsBarber/blob/main/funcioa.png" alt="Barbershop Logo" width="200">
  <br>
  Barbershop API
  <br>
</h1>

<h4 align="center">API para gestão de agendamentos, clientes, serviços e feedbacks em uma barbearia.</h4>

---

## Recursos

- **Agendamentos:** Gerencie os horários e serviços agendados para os clientes.
- **Clientes:** Controle as informações dos clientes cadastrados.
- **Serviços:** Cadastre e gerencie serviços disponíveis na barbearia (corte, barba, etc.).
- **Feedbacks:** Receba e gerencie os feedbacks dos clientes.
- **Login:** Gerencie autenticação de usuários (administradores e clientes).

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Swagger** para documentação da API
- **Arquitetura RESTful**

---

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/barbershop.git
2. Navegue até o diretório do projeto:
   ```bash
   cd api
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor:
   ```bash
   node index.js
5. Acesse a documentação no navegador:
   ```bash
   http://localhost:3000/api-docs
Endpoints
Clientes
GET /clientes
Lista todos os clientes cadastrados.

GET /clientes/:id
Busca um cliente pelo ID.

POST /clientes
Adiciona um novo cliente.

PATCH /clientes/:id
Atualiza informações de um cliente.

DELETE /clientes/:id
Exclui um cliente pelo ID.

Agendamentos
GET /agendamentos
Lista todos os agendamentos.

GET /agendamentos/:id
Busca um agendamento pelo ID.

POST /agendamentos
Cria um novo agendamento.

PATCH /agendamentos/:id
Atualiza informações de um agendamento.

DELETE /agendamentos/:id
Exclui um agendamento pelo ID.

Serviços
GET /servicos
Lista todos os serviços disponíveis.

GET /servicos/:id
Busca um serviço pelo ID.

POST /servicos
Adiciona um novo serviço.

PATCH /servicos/:id
Atualiza informações de um serviço.

DELETE /servicos/:id
Exclui um serviço pelo ID.

Feedbacks
GET /feedbacks
Lista todos os feedbacks enviados.

POST /feedbacks
Adiciona um novo feedback.

DELETE /feedbacks/:id
Exclui um feedback pelo ID.

Login
POST /login
Autentica um usuário e retorna um token.

GET /usuarios
Lista todos os usuários cadastrados.

POST /usuarios
Adiciona um novo usuário.

PATCH /usuarios/:id
Atualiza informações de um usuário.

DELETE /usuarios/:id
Exclui um usuário pelo ID.

