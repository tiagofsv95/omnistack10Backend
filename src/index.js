const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-9d9i1.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELTE

// Tipos de parametros express

// Query Params: request.query 
// Route Params: request.params
// Body: 

// MongoDB (Não-relacional);
