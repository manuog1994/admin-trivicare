#!/bin/bash

# Ir al directorio del proyecto
cd /www/var/admin.trivicare.com

# Detener el proceso de PM2
pm2 stop "ADMIN TRIVICARE"

# Actualizar el código del repositorio
git pull origin main

# Instalar las dependencias
npm install

# Construir la aplicación
npm run build

# Iniciar el proceso de PM2
pm2 start "ADMIN TRIVICARE"
