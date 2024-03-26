# App

GymPass style app.

## RFs (Requisitos funcionais)

- [X] Should be possible sign in;
- [X] Should be possible authenticate;
- [X] Should be possible get a user profile login;
- [X] Should be possible get the number checkins success did to the user login
- [X] Should be possible the user get your checkins history
- [X] Should be possible the user search gyms near (until 10 kms)
- [X] Should be possible the user search gyms by name
- [X] Should be possible the user checkin successfully
- [X] Should be possible validate checkin user
- [X] Should be possible save a gym

## RNs (Regras de negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [X] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);



## lib do typescript e tsup
npm i typescript @type/node tsx tsup -D

npx tsc --init   (cria o tsconfig.json)

npm i fastify

npm i dotenv

npm i zod    <- to validation

npm i eslint @rocketseat/eslint-config -D

npm i prisma -D
npx prisma init (tem que ter a extensão do prisma instalada)
     "[prisma]": {
      "editor.formatOnSave": true
    },
npm i @prisma/client <- dependecy prd to access the database
npm i -D npm-run-all <- execute scripts inside package.json and do automatically a conversion in the script to the user SO

docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

docker compose up -d  (-d de detach, ou seja, não aparece o log)
docker compose stop

O schema é uma forma de separarmos em vários outros schemas, ou seja, em um ambiente isolado

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


## Authentication Estrategies
- Basic Auth : basicly all requests the user need to send the credentials how headers in the request
  - Not secure because go transit email or/and  password, it's not good

- JWT (Json Web Token)
  - The user did login, send email/pass, the backend create a unique token, unmodificable and stateless
  - The name token call Stateless Token
    - Stateless: Don't save any persist structure data ( BD )
