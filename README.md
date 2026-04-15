# ⚡ Mi Energía - Proyecto DevOps

## 📌 Descripción

"Mi Energía" es una aplicación web que permite a los usuarios registrar su nivel de energía diario (alto, medio o bajo).

La aplicación almacenará la información en una base de datos, mostrará un historial de registros y generará logs en el servidor para evidenciar su funcionamiento.

## 🎯 Objetivo

El objetivo de este proyecto es aplicar prácticas de DevOps mediante el desarrollo, contenerización y despliegue de una aplicación web utilizando herramientas como Docker, AWS y CloudFormation.

## 🧱 Estructura del Proyecto

- backend/: lógica del servidor
- frontend/: interfaz del usuario
- cloudformation/: infraestructura como código


## Backend

El backend fue desarrollado utilizando Node.js y Express.

Se implementó un endpoint que permite recibir el nivel de energía del usuario (alto, medio o bajo) mediante solicitudes HTTP.

Además, el sistema genera logs en un archivo local (`logs/app.log`), donde se registra cada interacción del usuario.


## Frontend

El frontend fue desarrollado utilizando HTML y JavaScript.

Se implementó una interfaz simple con botones que permiten al usuario seleccionar su nivel de energía. Esta información se envía al backend mediante solicitudes HTTP y la respuesta del servidor se muestra dinámicamente en la página.



## Funcionamiento

1. El usuario accede a la aplicación desde el navegador.
2. Selecciona su nivel de energía.
3. El frontend envía la información al backend.
4. El backend procesa la solicitud y genera un log.
5. El servidor responde con un mensaje que se muestra en pantalla.


Ejecucion local (como lo ejecute locamente en dos terminales de visual studio code):

### Backend
cd backend
node app.js

### Frontend
cd frontend
npx serve -l 5000

Abrir en navegador:
http://localhost:5000

