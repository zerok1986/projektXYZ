# project XYZ  

Mezclar el lab de profile-app con la lección de proyectos y tareas para hacer un gestor de proyectos individuales orientado a developers
- Apuntar los pasos para hacer una app FullStack
  - Crear workflows en base a esos pasos?

## Puntos principales 📦



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

## APIs Info



### APIs Info



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

