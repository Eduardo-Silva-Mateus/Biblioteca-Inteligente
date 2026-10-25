# Biblioteca Inteligente

Aplicação web para gerenciamento de livros, desenvolvida como projeto de portfólio com foco no aprendizado de desenvolvimento backend com Java e Spring Boot e integração com frontend Angular.

O projeto permite cadastrar, listar, consultar, atualizar e excluir livros, utilizando uma API REST integrada a um banco de dados MariaDB.

## Funcionalidades

- Cadastro de livros com título, autor e ISBN.
- Listagem dos livros cadastrados.
- Consulta de livro por ID.
- Busca de livros por parte do nome do autor.
- Atualização dos dados de um livro.
- Exclusão de livros.
- Validação dos dados enviados à API.
- Tratamento de erros e respostas HTTP adequadas.

## Tecnologias utilizadas

### Backend
- Java 21
- Spring Boot
- Spring Web — desenvolvimento da API REST
- Spring Data JPA — acesso e persistência de dados
- Hibernate — mapeamento objeto-relacional (ORM)
- Jakarta Validation — validação dos dados
- Maven — gerenciamento de dependências e build

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- HttpClient — comunicação com a API REST

### Banco de dados
- MariaDB

### Ferramentas de desenvolvimento
- IntelliJ IDEA
- Git e GitHub
- Arquivos HTTP do IntelliJ para testar os endpoints da API

## Arquitetura do projeto

O backend utiliza uma arquitetura em camadas, separando as responsabilidades para facilitar a organização, a manutenção e a evolução do código.

- **Controller:** recebe as requisições HTTP e disponibiliza os endpoints da API REST.
- **Service:** concentra as regras de negócio e coordena as operações relacionadas aos livros.
- **Repository:** realiza o acesso e a persistência dos dados por meio do Spring Data JPA.
- **Model:** representa a entidade Livro e seus atributos.
- **Tratamento de exceções:** centraliza o tratamento de erros da API, retornando respostas HTTP apropriadas.

O frontend Angular consome a API REST do Spring Boot por meio de requisições HTTP. O backend utiliza o MariaDB para armazenar os dados dos livros.

### Fluxo da aplicação

`Angular → API REST (Spring Boot) → Service → Repository → MariaDB`

## Como executar o projeto

### Pré-requisitos

- Java JDK 21
- Node.js e npm
- MariaDB
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/Eduardo-Silva-Mateus/Biblioteca-Inteligente.git
cd Biblioteca-Inteligente
```

### 2. Configure o banco de dados

No MariaDB, crie o banco de dados:

```sql
CREATE DATABASE biblioteca_inteligente;
```

Configure a URL, o usuário e a senha no arquivo `src/main/resources/application.properties`, de acordo com seu ambiente local.

No ambiente de desenvolvimento original, a conexão utiliza o banco `biblioteca_inteligente`, o usuário `root` e uma senha vazia.

### 3. Execute o backend

Na raiz do projeto, abra um terminal e execute:

```powershell
.\mvnw.cmd spring-boot:run
```

A API ficará disponível em `http://localhost:8080`.

### 4. Execute o frontend

Abra outro terminal e execute:

```bash
cd frontend
npm install
npx ng serve
```

A aplicação Angular ficará disponível em `http://localhost:4200`.

## Endpoints da API REST

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| GET | `/livros` | Lista todos os livros |
| GET | `/livros/{id}` | Busca um livro pelo ID |
| POST | `/livros` | Cadastra um novo livro |
| PUT | `/livros/{id}` | Atualiza os dados de um livro |
| DELETE | `/livros/{id}` | Exclui um livro |

### Exemplo de cadastro

Requisição:

```http
POST http://localhost:8080/livros
Content-Type: application/json

{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "isbn": "9780132350884"
}
```

Quando o cadastro é bem-sucedido, a API retorna `201 Created` e o cabeçalho `Location`, indicando a URL do livro recém-criado.

### Validação e tratamento de erros

- `400 Bad Request`: dados inválidos enviados na requisição.
- `404 Not Found`: livro não encontrado nas operações de busca ou atualização.

## Objetivo do projeto

A Biblioteca Inteligente foi desenvolvida como projeto de portfólio para consolidar conhecimentos em Java, Spring Boot, desenvolvimento de APIs REST, persistência de dados e integração entre backend e frontend.

O projeto faz parte da minha evolução como desenvolvedor, com foco em boas práticas de programação, organização do código e construção de aplicações web.

## Autor

**Eduardo Mateus da Silva**

- GitHub: https://github.com/Eduardo-Silva-Mateus
- LinkedIn: https://linkedin.com/in/eduardo-mateus-silva
- Portfólio: https://eduardo-silva-mateus.github.io/Portifolio/
