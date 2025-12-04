const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());              // permite peticiones desde localhost:8100 
app.use(express.json());      // para leer JSON en el body

// Usuario de prueba
const USER = {
  email: 'alfaroashley25@gmail.com',
  password: '123456',
  name: 'Ashley Alfaro',
};

// Endpoint de login
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Solicitud de login recibida:', email, password);

  if (email === USER.email && password === USER.password) {
    // Login exitoso
    return res.json({
      token: 'fake-jwt-token-123',
      user: {
        email: USER.email,
        name: USER.name,
      },
    });
  }

  // Login incorrecto
  return res.status(401).json({
    message: 'Credenciales inválidas',
  });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Backend de autenticación escuchando en http://localhost:${PORT}`);
});
