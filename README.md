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


## 🔧 Control de versiones

Se utilizó Git y GitHub para el control de versiones del proyecto. Se realizaron múltiples commits representando el progreso del desarrollo, así como el uso de una rama adicional para la implementación de nuevas funcionalidades.

## Base de datos integrada con mongoose

## 🐳 Docker

La aplicación fue contenerizada utilizando Docker y Docker Compose. Se crearon contenedores independientes para el frontend, backend y la base de datos MongoDB, permitiendo ejecutar todo el sistema con un solo comando.

## ⚙️ Scripts de automatización

Se crearon scripts en Bash para automatizar el despliegue y control de la aplicación. En entornos Windows, estos scripts se complementan con comandos de Docker Compose debido a limitaciones del sistema operativo.



