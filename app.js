// Archivo: app.js

const express = require('express');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const app = express();

// Configuración de Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de sesión
app.use(session({
    secret: process.env.SECRET_KEY || 'mi_secreto',
    resave: false,
    saveUninitialized: true
}));

// Importar rutas
const loginRoutes = require('./routes/loginRoutes');
app.use('/', loginRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo  en http://localhost:${PORT}`);
});
