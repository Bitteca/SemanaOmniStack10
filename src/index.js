const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://bitteca:edu191295ardo@cluster0-oz9rg.mongodb.net/devradar?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(routes);
app.listen(3333);
