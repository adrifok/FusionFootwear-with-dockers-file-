# Usa la imagen oficial de Node.js como imagen base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto 8080 en el contenedor
EXPOSE 8080

# Inicia la aplicación cuando se inicie el contenedor
CMD [ "node", "index.js" ]


