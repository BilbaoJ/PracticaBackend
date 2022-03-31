// Importar los servicios
const {leerDocumentos, agregarDocumento} = require('../services/mongodb.service');


// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Usuarios agregado correctamente";
        let informacion = req.body;
        // Consulta a la base de datos de usuarios
        let resultado = await agregarDocumento("usuarios", informacion);
        //run().catch(console.dir);
        console.log(resultado);

        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error agregando el usuario";
        respuesta.info = error;
        res.status(500).send(respuesta);   
    }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const modificarUsuario = (req, res) => {
    res.send("Crear usuario");
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const eliminarUsuario = (req, res) => {
    res.send("Eliminar usuario");
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const consultarUsuario = (req, res) => {
     let id = req.params.id;
    res.send("Consultar usuario " + id); // JSON.stringify(req.params)
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const consultarUsuarios = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Usuarios consultados correctamente";

        // Consulta a la base de datos de usuarios
        let resultado = await leerDocumentos("usuarios");
        //run().catch(console.dir);
        console.log(resultado);

        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los usuarios";
        respuesta.info = error;
        res.status(500).send(respuesta);    
    }
};


module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}

