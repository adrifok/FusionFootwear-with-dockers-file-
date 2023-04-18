# Usa la imagen oficial de Node.js como imagen base
FROM node:slim

# Establece el directorio de trabajo en /app
WORKDIR /app/

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json /app/

# Instala las dependencias del proyecto
RUN npm install 

# Copia todos los archivos de la aplicación al contenedor
COPY . .

EXPOSE 3001

# Inicia la aplicación cuando se inicie el contenedor
CMD [ "node", "index.js" ]


