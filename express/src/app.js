// 1. Importamos el módulo express
const express = require('express')

// 2. Creamo una aplicación de Express
const app = express()

// 3. Definimos el puerto que va a escuchar el servidor
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
