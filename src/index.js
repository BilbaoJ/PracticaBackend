const express = require('express'); // Se importa el framework de express
const app = express(); // Instanciando la aplicación

// Integrando el router con la app
const router = require('./routers/index.router');
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const PORT = 3000; // Puerto donde se levanta el servidor web (Puerto donde está escuchando la API)

// Levantar la API que estará escuchando en el puerto 3000
// 1. Primer parámetro: Puerto
// 2. Segundo parámetro: Callback
app.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`)
});