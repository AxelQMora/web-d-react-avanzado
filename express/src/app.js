require('dotenv').config()
// console.log(process.env.PORT)
// console.log(process.env.NOMBRE)

const { infoPeliculas } = require('./peliculas')
console.log(infoPeliculas)

// 1. Importamos el módulo express
const express = require('express')

// 2. Creamos una aplicación de Express
const app = express()

// 3. Definimos el puerto que va a escuchar el servidor
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.get('/api/peliculas', (req, res) => {
  res.send(infoPeliculas)
})

// app.get('/api/peliculas/accion', (req, res) => {
//  res.send(infoPeliculas.accion)
// })

app.get('/api/peliculas/accion/titulo/:titulo/:year', (req, res) => {
  const { titulo, year } = req.params

  const resultados = infoPeliculas.accion.filter(pelicula =>
    pelicula.titulo === titulo && pelicula.year === parseInt(year)
  )

  if (resultados.length === 0) {
    return res.status(400).send(`No se encontraron resultados para "${titulo}" del año ${year}`)
  }

  res.send(resultados)
})

app.get('/api/peliculas/comedia/:pais', (req, res) => {
  const pais = req.params.pais
  const resultados = infoPeliculas.comedia.filter(pelicula => pelicula.pais === pais)

  if (req.query.ordenar === 'year') {
    return res.send(resultados.sort((a, b) => b.year - a.year))
  }

  res.send(resultados)
})

app.use(express.json())

app.post('/api/peliculas', (req, res) => {
  const nuevaPelicula = req.body

  console.log(nuevaPelicula)

  res.status(201).send({
    mensaje: 'La pelicula se recibió con éxito',
    datos: nuevaPelicula
  })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
