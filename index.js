import express from 'express';

const app = express();

const porta = 3000;

const host = '0.0.0.0';

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`); 
});