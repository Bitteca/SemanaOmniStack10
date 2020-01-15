const { Router } = require('express');
const routes = Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

// Query Params: Sao parametros Incorporados na URL, geralmente usado para GET && POST (req.query) - [Filtros, Ordenaçao, paginaçao]
// Route Params:Parametros depois da '/' e com ':'. (req.params) - [Alteraçao, Exclusao]
// Body: Dados para criaçao ou alteraçao de um registro (req.body)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
routes.put('/devs/:id', DevController.update);
routes.delete('/devs/:id', DevController.destroy);

module.exports = routes;
