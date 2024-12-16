# Staff Management System

## Sobre o Projeto

O **Staff Management System** é uma aplicação fullstack desenvolvida para gerenciar informações de funcionários em uma organização. Este projeto utiliza um backend em Laravel para fornecer uma API robusta e segura, enquanto o frontend foi construído em Next.js para oferecer uma experiência de usuário rápida e responsiva.

### Funcionalidades

- **Gestão de Funcionários**: Cadastro, edição, listagem e remoção de funcionários.
- **Autenticação JWT**: Controle de acesso seguro para os usuários.
- **Relações Entre Entidades**: Gestão de departamentos com chave estrangeira atreladas a muitos funcionários.
- **Frontend Moderno**: Interface de usuário desenvolvida em Next.js com estilização responsiva.

## Tecnologias Utilizadas

### Backend

- **Framework**: Laravel 11
- **Banco de Dados**: MySQL
- **Autenticação**: JWT (JSON Web Token)
- **Seeds & Factories**: Geração automática de dados para testes

### Frontend

- **Framework**: Next.js
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS

### Outras Ferramentas

- Composer (Gestão de dependências PHP)
- npm (Gestão de dependências JavaScript)

## Estrutura de Dados

### Migration: Departments

```php
Schema::create('departments', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

### Migration: Employees

```php
Schema::create('employees', function (Blueprint $table) {
    $table->id();
    $table->string('first_name');
    $table->string('last_name');
    $table->string('email')->unique();
    $table->string('phone');
    $table->foreignId('department_id')
          ->constrained('departments')
          ->onUpdate('cascade')
          ->onDelete('cascade');
    $table->string('password');
    $table->timestamps();
});
```

### Migration: Tasks

```php
Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('description');
    $table->date('due_date');
    $table->foreignId('assignee_id')
          ->constrained('employees')
          ->onUpdate('cascade');
          ->onDelete('cascade');
    $table->timestamps();
});
```

## Instalação

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/Mirian97/staff-management-system.git
   cd staff-management-system/back
   ```
2. Instale as dependências do Laravel:
   ```bash
   composer install
   ```
3. Configure o arquivo `.env` com os dados do banco de dados e gere uma nova Api key.

   ```bash
    cp .env.example .env

    php artisan key:generate
   ```

4. Execute as migrações e seeds:
   ```bash
   php artisan migrate --seed
   ```
5. Inicie o servidor:
   ```bash
   php artisan serve
   ```

### Frontend

1. Navegue até a pasta do frontend:
   ```bash
   cd ../front
   ```
2. Instale as dependências do Next.js:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env.local` com a URL da API do Laravel.
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Rotas da API

### Autenticação

- **POST** `/api/register` – Registra um novo usuário.
- **POST** `/api/login` – Realiza o login e retorna o token JWT.
- **POST** `/api/logout` – Invalida o token JWT.
- **GET** `/api/user` – Retorna os dados do usuário autenticado.

### Departments

- **GET** `/api/departments` – Lista todos os departamentos.
- **POST** `/api/departments` – Cria um novo departamento.
- **PUT** `/api/departments/{id}` – Atualiza os dados de um departamento.
- **DELETE** `/api/departments/{id}` – Exclui um departamento.

### Employees

- **GET** `/api/employees` – Lista todos os funcionários.
- **POST** `/api/employees` – Cria um novo funcionário.
- **PUT** `/api/employees/{id}` – Atualiza os dados de um funcionário.
- **DELETE** `/api/employees/{id}` – Exclui um funcionário.

### Tasks

- **GET** `/api/tasks` – Lista todas as tarefas.
- **POST** `/api/tasks` – Cria uma nova tarefa.
- **PUT** `/api/tasks/{id}` – Atualiza os dados de uma tarefa.
- **DELETE** `/api/tasks/{id}` – Exclui uma tarefa.

## Contribuição

Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir melhorias no projeto.

## Licença

Este projeto está licenciado sob a [MIT License](./docs/LICENSE.md).
