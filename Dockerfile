# Imagen base
FROM node:18

# Definir directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
