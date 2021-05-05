require('dotenv').config();
const express = require('express');
const InitiateMongoServer = require('./config/db');
const productRoutes = require('./routes/productRoutes')

InitiateMongoServer();

const app = express();

app.use(express.json());

app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));