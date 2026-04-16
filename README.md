Mi Energía - Proyecto DevOps

- Descripción

"Mi Energía" es una aplicación web que permite a los usuarios registrar su nivel de energía diario (alto, medio o bajo).

La aplicación procesa esta información mediante un backend, la almacena en una base de datos, genera logs y además los envía a AWS S3 como parte de la integración en la nube.


- Objetivo

El objetivo de este proyecto es aplicar prácticas de DevOps mediante el desarrollo, contenerización y despliegue de una aplicación web utilizando herramientas como Docker, AWS (EC2, S3) y CloudFormation.


- Arquitectura

La aplicación sigue una arquitectura simple basada en contenedores:

Usuario (Navegador)
        │
        ▼
EC2 (AWS)
        │
        ▼
Docker Compose
        │
        ├── Frontend (5173)
        ├── Backend (3000)
        └── MongoDB (27017)
                │
                ▼
            AWS S3 (logs)

El usuario accede desde el navegador al frontend
El frontend envía solicitudes al backend
El backend procesa los datos, guarda información y genera logs
Los logs se almacenan localmente y también en S3


- Tecnologías utilizadas

Node.js + Express
HTML + JavaScript 
MongoDB + Mongoose
Docker & Docker Compose
AWS EC2 → Despliegue
AWS S3 → Almacenamiento de logs
Git & GitHub → Control de versiones
Bash → Automatización


- Funcionamiento

El usuario accede a la aplicación desde el navegador
Selecciona su nivel de energía
El frontend envía la información al backend
El backend procesa la solicitud
Se guarda un log local
Se envía el log a AWS S3
Se responde al usuario con un mensaje


- Ejecución local

- Backend
cd backend
npm install
node app.js

- Frontend
cd frontend
npx serve -l 5000


- Abrir en navegador
http://localhost:5000


- Ejecución con Docker

Desde la raíz del proyecto:

docker-compose up -d

Esto levanta automáticamente:

Backend
Frontend
MongoDB


- Despliegue en EC2

- Pasos realizados

Crear instancia EC2
Configurar Security Groups (puertos abiertos)
Conectarse vía EC2 Instance Connect

Clonar repositorio:
git clone <https://github.com/eriansantoy/mi-energia-devops.git>
cd mi-energia-devops

Ejecutar despliegue:
docker-compose up -d


- Puertos utilizados
Servicio	Puerto
Frontend	5173
Backend	3000
MongoDB	27017
SSH	22
HTTP	80

- Uso de S3

Se utilizó un bucket de S3 para almacenar logs generados por el backend.

Cada vez que el usuario interactúa con la aplicación:

Se genera un log local
Se envía automáticamente a S3

Esto permite tener almacenamiento persistente en la nube.


- Control de versiones

Se utilizó Git y GitHub para el control de versiones del proyecto. Se realizaron múltiples commits representando el progreso del desarrollo, así como el uso de ramas para nuevas funcionalidades.


- Scripts de automatización

Se implementó un script deploy.sh para automatizar el despliegue de la aplicación en EC2, facilitando la ejecución de Docker Compose y reduciendo errores manuales.


- Notas finales

Este proyecto demuestra una implementación básica de prácticas DevOps, integrando desarrollo, contenerización y despliegue en la nube en una sola solución funcional.



