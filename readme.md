# API Restaurante

> API sobre restaurante para el proyecto de desarrollo web

```
|
|--src
|----controllers
|----routers
|----services
|----index.js
|--index.js
```

1. Controllers: Controlar el tráfico de información
2. Routers: Declarar las rutas del API 
3. Services: Servicios que se van a utilizar
4. index.js: Inicio de la API
5. .gitignore: Ignorar la carga de archivos y/o carpetas al repositorio

## Estructura que retorna los endpoints
```json
{
    "ok" : "Boolean",
    "message": "String",
    "info" : "Object"
}
```

# Notas
## Comandos 
- `npm init`: Inicializar el proyecto con el package.json
- `npm install NOMBRE`: Instalar las librerías o 
frameworks en específico
- `npm install`: Instalar TODAS las librerías o frameworks regustradas en el package.json
- `npm run dev` : Ejecutar el script que se encuentra en el package.json

## Librerias y frameworks
1. Express: `npm install express --save` Framework para crear la API
2. nodemon: `nmp i nodemon` Herramienta de desarollo para recargat automáticamente el proyecto