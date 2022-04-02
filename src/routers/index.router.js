const express = require('express'); // Se importa el framework de express

const router = express.Router(); // Instanciando un router

const usuario_controller = require('../controllers/usuarios.controller');

const version = "/api/v1";

// Definición de los endpoints - rutas
router.get(version + "/usuarios", usuario_controller.consultarUsuarios);
router.get(version + "/usuarios/:id", usuario_controller.consultarUsuario);
router.post(version + "/usuarios", usuario_controller.crearUsuario);
router.put(version + "/usuarios/:id", usuario_controller.modificarUsuario);
router.delete(version + "/usuarios/:id", usuario_controller.eliminarUsuario);

// /usuarios/:id/documentos/:id_documento varios parametros
// /usuarios/:id/documentos/:id_documento? parametro opcional

module.exports = router;