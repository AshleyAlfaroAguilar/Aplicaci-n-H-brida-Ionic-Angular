# Aplicación Móvil Híbrida – Autenticación con Ionic + Angular (Standalone)

- **Estudiante:** Ashley Dayane Alfaro Aguilar 
- **Universidad:** Universidad Da Vinci de Guatemala 
- **Curso:** Desarrollo Móvil 
- **Fecha:** 05 de diciembre del 2025

Proyecto desarrollado como parte del examen final de **Desarrollo Móvil**.  
La aplicación implementa un flujo básico de autenticación, guardias de ruta, páginas internas protegidas y un backend propio con Node.js.



## Tecnologías utilizadas

### Frontend (Ionic + Angular)
- Ionic 7 (CLI)
- Angular Standalone Components
- Ionic UI Components (`ion-input`, `ion-card`, `ion-button`, etc.)
- Reactive Forms
- Angular Router + Guards (CanActivate)
- LocalStorage para manejo de sesión

### Backend (Node.js + Express)
- Node.js
- Express.js
- CORS
- JSON Body Parser



# Estructura del Proyecto
![](/evidencias/estructura.png)

# Funcionalidades principales

## Pantalla de Login
- Implementada con **formularios reactivos**.
- Validaciones:
  - Correo requerido + formato válido.
  - Contraseña requerida + mínimo 6 caracteres.
- **ÚNICA llamada HTTP del proyecto** → POST `/auth/login`.
- Si el login es correcto:
  - Guarda token en `localStorage`.
  - Redirige al Home.
- Si falla:
  - Muestra mensaje de error.

![](/evidencias/login.png)

## Ruteo + Guardianes (AuthGuard)
- Rutas principales:
  - `/login`
  - `/home` (protegida)
  - `/perfil` (protegida)
- **AuthGuard** verifica si existe token en `localStorage`.
- Si no está autenticado → redirige a `/login`.

![](/evidencias/auth.png)

## Sección Interna / Home
- Pantalla protegida con mensaje de bienvenida.
- Botones:
  - **Ir al Perfil**
  - **Cerrar Sesión**

![](/evidencias/home.png)

## Página Perfil (Formulario Reactivo)
- Campos:
  - Nombre
  - Apellido
  - Correo electrónico
- Validaciones en cada campo.
- Al presionar "Guardar datos":
  - **No envía nada al backend** (requisito del examen).
  - Muestra datos en consola.
- Incluye botón **Regresar al Inicio**.

![](/evidencias/perfil.png)

# Ejecución Frontend y Backend 
 
## Frontend (Ionic)
```
    cd frontend-ionic
    npm install
    ionic serve
```
Estará disponible en http://localhost:8100

## Backend (node + express)
```
    cd backend-node
    npm install
    node server.js

```
Estará disponible en http://localhost:3000/auth/login 

# Usuario de prueba 
- **Usuario:** alfaroashley25@gmail.com
- **Contraseña:** 123456
