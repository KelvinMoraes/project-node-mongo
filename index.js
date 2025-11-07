const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const { connect } = require('./db/conn');

const productsRoutes = require('./routes/productsRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

app.use('/products', productsRoutes);

connect()
  .then(() => {
    app.listen(3000, () => console.log('HTTP: http://localhost:3000'));
  })
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });
