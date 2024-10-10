const express = require('express');
const productsRouter = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('express-async-errors');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
