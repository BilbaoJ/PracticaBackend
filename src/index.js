const express = require('express'); // Se importa el framework de express
const app = express(); // Instanciando la aplicación
const cors = require('cors');

require("../config/index.config") // Agregar configuración al process.env

app.use(express.json()); // Aplicar middelware que permite leer los json del body

app.use(cors()); // Aplicar middelware cors

// Integrando el router con la app
const router = require('./routers/index.router');
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const PORT = process.env.PORT; // Puerto donde se levanta el servidor web (Puerto donde está escuchando la API)

// Levantar la API que estará escuchando en el puerto 3000
// 1. Primer parámetro: Puerto
// 2. Segundo parámetro: Callback
app.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`)
});