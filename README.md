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

## Endpoints Disponíveis

### Cortes
- **POST** `/cortes` - Adiciona um novo corte.  
- **GET** `/cortes` - Lista todos os cortes.  
- **PUT** `/cortes/{id}` - Atualiza os dados de um corte.  

### Horários
- **POST** `/horarios` - Adiciona um novo horário.  
- **GET** `/horarios` - Lista todos os horários.  
- **PUT** `/horarios/{id}` - Atualiza os dados de um horário.  
- **DELETE** `/horarios/{id}` - Exclui um horário.  

### Barbeiros
- **POST** `/barbeiros` - Adiciona um novo barbeiro.  
- **GET** `/barbeiros` - Lista todos os barbeiros.  
- **PUT** `/barbeiros/{id}` - Atualiza os dados de um barbeiro.  
- **DELETE** `/barbeiros/{id}` - Remove um barbeiro.  

### Usuários
- **POST** `/usuarios` - Cadastra um novo usuário.  

### Autenticação
- **POST** `/login` - Realiza o login de um usuário.


