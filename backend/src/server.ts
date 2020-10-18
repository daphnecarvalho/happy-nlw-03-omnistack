import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// ----------------------------------------------------------------
// EXPLICAÇÕES:

// Métodos HTTP = GET, POST, PUT, DELETE

// GET      = Buscar uma informação
// POST     = Criar uma informação
// PUT      = Editar uma informação
// DELETE   = Deletar uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Idendificar um recurso)
// Body Params: http://localhost:3333/users (Idendificar um recurso)

/*
app.get('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({ message: 'Hello World' });
});
*/

// Driver nativo                    - Sqlite3 - sqlite3.query("SELECT * FROM alunos");
// Query builder                    - Knex.JS - knex('users).select('*').where('name', 'Diego');
// ORM (Object Relational Mapping)  - Typeorm