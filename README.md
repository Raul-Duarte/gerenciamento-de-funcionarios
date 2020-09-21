# gerenciamento-de-funcionarios

### Requirements
* Docker
* Docker ce
* Nodejs

## Instructions

First clone this repository.
```bash
$ git clone https://github.com/Raul-Duarte/gerenciamento-de-funcionarios
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

Then run these from your command line:


```bash
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

```bash
$ cd gerenciamento-de-funcionarios/client

$ npm install

$ npm start
```

```bash
$ cd ../server
$ npm install 
$ npx sequelize db:migrate
$ npm run dev
```