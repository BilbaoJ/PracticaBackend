const { compararHash } = require("../services/bcrypt.service");
const { crearToken } = require("../services/jwt.service");
const { leerDocumento } = require("../services/mongodb.service");

const login = async (req, res) => {
    let respuesta = {}
    try {
        const credenciales = req.body;
        //Una forma de consultar por correo unicamente
        //const tempClave = credenciales.clave;
        //delete credenciales.clave;
        const usuario = await leerDocumento("usuarios", { correo: credenciales.correo });

        if (usuario) {
            const claveEsIgual = compararHash(credenciales.clave, usuario.clave)

            if (claveEsIgual === true) {
                // Eliminar información sensible
                delete usuario.correo;
                delete usuario.clave;

                const token = crearToken(usuario);

                respuesta.ok = true;
                respuesta.message = "Login exitoso";
                respuesta.info = { ...usuario, token };
                res.send(respuesta);
            } else {
                respuesta.ok = false;
                respuesta.message = "Clave incorrecta";
                respuesta.info = null;
                res.send(respuesta);
            }
        } else {
            respuesta.ok = false;
            respuesta.message = "Usuario no existe";
            respuesta.info = null;
            res.send(respuesta);
        }

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