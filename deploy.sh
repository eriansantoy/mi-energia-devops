#!/bin/bash

echo "Desplegando aplicación..."

docker compose up --build -d

echo "Aplicación desplegada"