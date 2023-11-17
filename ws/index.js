const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();



const filmeRoutes = require('./src/routes/filmes.routes');;
const usuariosRoutes = require('./src/routes/usuarios.routes');
const episodeosRoutes = require('./src/routes/episodeos.routes');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// ROUTES
app.use('/', filmeRoutes);
app.use('/usuario', usuariosRoutes);
app.use('/episodeo', episodeosRoutes);

app.listen(8000, () => {
    console.log('Meu servidor está funcionando');
});