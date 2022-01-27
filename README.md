# project XYZ  

Mezclar el lab de profile-app con la lección de proyectos y tareas para hacer un gestor de proyectos individuales orientado a developers
- Apuntar los pasos para hacer una app FullStack
  - Crear workflows en base a esos pasos?

## Puntos principales 📦

1. Decidir idea del proyecto y MVP a desarrollar
2. Definir principales funcionalidades
3. Crear Modelos (luego los pasaremos a código en el server)
4. Crear Rutas del server
5. Crear directorio raiz del proyecto
6. Dentro de ese directorio, abrir Terminal y ejecutar una de estas opciones:
   1.  `ironlauncher@latest app-name --auth --fs` para crear aplicación FS con create-react-app en el Frontend y NodeJS + ExpressJS en el Backend con auth/login/signup básico
   2.  `npx ironlauncher server --json` para crear Backend con NodeJS + ExpressJS y `npx create-react-app client` para el Frontend con React
   3. (Visita https://www.npmjs.com/package/ironlauncher para más info sobre opciones de Ironlauncher)
7. Abrir el proyecto en el IDE y limpiar ambas carpetas client/server para adecuarlas al proyecto
8. Hacer `npm i` tanto en carpeta de server como en client antes de iniciar ambos servicios
9.  Iniciar mongoDB (en algunos casos) antes de iniciar el server
10. Picar modelos en el server y rutas mínimas de auth
11. Comprobar que hay conexión con BBDD y entre back y front
12. Para iniciar entornos de desarrollo en ambos lados, divide en 2 tu Terminal y:
    1.  Ejecuta `npm run dev` en una instancia de tu Terminal dentro de la carpeta server
    2.  Ejecuta `npm start` en la otra instancia de la Terminal dentro de la carpeta client
13. Si no hay ningún bug en las rutas o modelos, conexión back-front, etc, el paso anterior abrirá automáticamente tu app funcionando correctamente en http://localhost:3000/
14. TODO: RUTAS adicionales back + Test Postman + SERVICIOS y Componentes en front


## Germán way to build a quick MERN stack app 🚀

1. Crear la BBDD en MongoDB Compass
2. Poblar la BBDD (seed, archivo JSON)
3. Crear directorios client y server
4. Crear el server con Express
   1. npm init -y
   2. npm i express
5. server.js

```
const express = require('express')
const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://')
  .then(() => console.log('Conectado a BBDD'))

// Model
const Coaster = require('./models/coasters.model')

// CORS
const cors = require('cors')
app.use(cors())

// Routing
app.get('/api', (req, res) => {
  Coaster
    .find()
    .then(allCoasters => res.json(allCoasters))
})

app.get('/api/details/:id', (req, res) => {
  const { id } = req.params

  Coaster
    .findById(id)
    .then(coaster => res.json(coaster))
})

app.listen(5005, ()=> console.log('server listening')
```
6. Conexión a la BBDD
   npm i mongoose
7. Hacer modelos
   1. Carpeta models
   2. Archivo xxxxx.model.js
   ```
   const mongoose = require('mongoose')

   const coasterSchema = mongoose.Schema({
     title: String
     ...
   })

   const Coaster = mongoose.model('coaster', coasterSchema)

   module.exports = Coaster
   ```
8. Integrar las rutas en el server
9. EMPEZAMOS PARTE DE CLIENT
10. En carpeta client npx create-react-app .
11. Crear y adaptar carpeta client
12. Crear estructura de carpetas y componentes
13. `npm i react-router-dom`
14. Routes y Route
15. Links de react-router-dom para evitar recargas de pagina




### Util TIPS

- CTRL + Shift + K : borra toda la linea
- object-fit: cover !!!!









## Endpoints

| Method | Path              | Description                                          |
| ------ | ----------------- | ---------------------------------------------------- |
| get    | /                 | Muestra la Home con Login/Signup                     |
| get    | /allActivities    | Muestra la lista de actividades en la Home loggeada  |
| get    | /activity/:id     | Muestra detalles de una actividad                    |
| post   | /newActivity      | Crea nueva actividad (TEACHER)                       |
| put    | /editActivity/:id | Edita en la BBDD la actividad (GOD)                  |
| delete | /deleteAct/:id    | Borra la actividad (TEACHER, GOD)                    |
| get    | /allAppointments  | Muestra la lista de citas en la Home loggeada        |
| post   | /newAppointment   | Crea nueva cita (USER)                               |
| delete | /deleteApp:id     | Borra la cita (USER, GOD)                            |
| get    | /profile/:id      | Muestra detalles del perfil (USER, TEACHER)          |
| put    | /editProfile/:id  | Edita el perfil (USER, TEACHER, GOD)                 |
| delete | /deleteProf/:id   | Borra al usuario (GOD)                               |
| post   | /signup           | Guarda el nuevo usuario                              |
| post   | /login            | Guarda la nueva sesión de usuario loggeado           |
| get    | /logout           | Borra la sesión de usuario loggeado                  |
| get    | /isloggedin       | Middleware que comprueba si hay usuario loggeado     |


## Comenzando 🚀

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_TODO_

### Instalación 🔧

`npm install` o `npm i` en el servidor y en el cliente

## Variables de entorno del servidor 📦



## Despliegue 📦

`npm run dev` en el servidor y `npm start` en el cliente

## Construido con 🛠️

- React
- NodeJS
- Express
- MongoDB
- Mongoose
- Vanilla JavaScript
- Material UI
- React Bootstrap
- CSS3
- @react-google-maps/api
- react-geocode

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autor ✒️

- **Miguel Angel Abad** - _IronHack_ - [zerok1986](#https://github.com/zerok1986)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

