# App

GymPass style app.

## RFs (Requisitos funcionais)

- [X ] Deve ser possível se cadastrar;
- [X ] Deve ser possível se autenticar;
- [X ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [X ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [X ] A senha do usuário precisa estar criptografada;
- [X ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);



## lib do typescript e tsup
npm i typescript @type/node tsx tsup -D

npx tsc --init   (cria o tsconfig.json)

npm i fastify

npm i dotenv

npm i zod    <- para validacao

npm i eslint @rocketseat/eslint-config -D

npm i prisma -D
npx prisma init (tem que ter a extensão do prisma instalada)
     "[prisma]": {
      "editor.formatOnSave": true
    },
npm i @prisma/client <- dependencia de prd para acessar o bd

docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

docker compose up -d  (-d de detach, ou seja, não aparece o log)
docker compose stop

## Annotations about Project Structure
a pasta "use-cases" é a mesma coisa que a pasta "services"


## Docker into Windows 11 (Probaly problems)
- Enable VM in the BIOS (press f2 when notebook lenovo)
- Services (Windows security - other options - disable all service and after, start docker service)

## SOLID Principles
- D : Dependency Inversion Principle
    Como o caso de uso ( service ) tem acesso a dependencia
    Inverte a ordem de como a dependecia chega
    Recebe as dependencias como parametros
