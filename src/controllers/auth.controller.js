const { compararHash } = require("../services/bcrypt.service");
const { crearToken, verificarToken, decodificarToken } = require("../services/jwt.service");
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

const validarToken = (req, res) => {
    try {
        let respuesta = {};
        const token = req.headers.token;

        let tokenEsCorrecto = decodificarToken(token);
        if (tokenEsCorrecto) {
            respuesta.ok = true;
            respuesta.message = "Usuario verificado";
            respuesta.info = tokenEsCorrecto;
            res.send(respuesta);
        } else {
            respuesta.ok = false;
            respuesta.message = "Usuario no verificado";
            respuesta.info = null;
            res.status(401).send(respuesta);
        }
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Error no controlado";
        respuesta.info = null;
        res.status(500).send(respuesta);
    }

}

module.exports = {
    login,
    validarToken
}