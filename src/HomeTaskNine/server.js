const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const productRouter = require('./api/products');
require('express-async-errors');
require('./connect-db');


// postman
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res) => {
    res
      .status(404)
      .sendFile(path.join(__dirname, 'public', '404.html'))
});

app.use((err, req, res, next) => {
    res
    .status(500)
    .send({ error: err.message })
});


app.listen(3001, () => {
    console.log('Server is running on 3001 port')
});