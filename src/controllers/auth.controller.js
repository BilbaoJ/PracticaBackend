const { crearToken } = require("../services/jwt.service");
const { leerDocumento } = require("../services/mongodb.service");

const login = async (req, res) => {
    let respuesta = {}
    try {
        const credenciales = req.body;
        const usuario = await leerDocumento("usuarios", credenciales);

        // Eliminar información sensible
        delete usuario.correo;
        delete usuario.clave;

        const token = crearToken(usuario);

        respuesta.ok = true;
        respuesta.message = "Login exitoso";
        respuesta.info = { ...usuario, token};
        res.send(respuesta);  
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error realizando el login";
        respuesta.info = error;
        res.status(500).send(respuesta);  
        console.log(error); 
    }

}

module.exports = {
    login
}