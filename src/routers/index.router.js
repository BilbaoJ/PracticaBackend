const express = require('express'); // Se importa el framework de express

const router = express.Router(); // Instanciando un router

const usuario_controller = require('../controllers/usuarios.controller');
const platos_controller = require("../controllers/platos.controller");
const auth_controller = require("../controllers/auth.controller");
const { verificarPeticion } = require('../middlewares/token.middleware');
const { notFound } = require('../middlewares/404.middleware');

const version = "/api/v1";

router.post(version + "/login", auth_controller.login);

router.post(version + "/usuarios", usuario_controller.crearUsuario);

// Para aplicar la verificación para todas las peticiones
router.use(verificarPeticion);

// Definición de los endpoints - rutas
router.get(version + "/validate", auth_controller.validarToken);
router.get(version + "/usuarios", usuario_controller.consultarUsuarios);
router.get(version + "/usuarios/:id", usuario_controller.consultarUsuario);
router.put(version + "/usuarios/:id", usuario_controller.modificarUsuario);
router.delete(version + "/usuarios/:id", usuario_controller.eliminarUsuario);

// /usuarios/:id/documentos/:id_documento varios parametros
// /usuarios/:id/documentos/:id_documento? parametro opcional

router.get(version + "/platos", platos_controller.consultarPlatos);
router.post(version + "/platos", platos_controller.crearPlato);
router.put(version + "/platos/:id", platos_controller.modificarPlato);
router.get(version + "/platos/:id", platos_controller.consultarPlato);
router.delete(version + "/platos/:id", platos_controller.eliminarPlato);

router.use(notFound);

module.exports = router;