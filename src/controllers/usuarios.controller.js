// Importar los servicios
const {leerDocumentos, agregarDocumento, modificarDocumento, eliminarDocumento} = require('../services/mongodb.service');


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
        //Agregar a la base de datos
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
const modificarUsuario = async (req, res) => {
    let respuesta = {};
    try {
        let _id = req.params.id; //Otra forma req.params.["id"]

        respuesta.ok = true;
        respuesta.message = "Usuario modificado correctamente";

        //Modificar usuario en la base de datos
        let informacion = req.body;
        let resultado = await modificarDocumento("usuarios", { _id }, informacion);
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error modificando el usuario";
        respuesta.info = error;
        res.status(500).send(respuesta);  
        console.log(error); 
    }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const eliminarUsuario = async (req, res) => {
    let respuesta = {};
    try {
        let _id = req.params.id; //Otra forma req.params.["id"]

        respuesta.ok = true;
        respuesta.message = "Usuario eliminado correctamente";

        //Eliminar usuario de la base de datos
        let resultado = await eliminarDocumento("usuarios", { _id });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error eliminando el usuario";
        respuesta.info = error;
        res.status(500).send(respuesta);  
        console.log(error); 
    }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const consultarUsuario = async (req, res) => {
    let respuesta = {};
    try {
        let _id = req.params.id; //Otra forma req.params.["id"]

        respuesta.ok = true;
        respuesta.message = "Usuario consultado correctamente";

        //Consultar usuario de la base de datos
        let resultado = await leerDocumentos("usuarios", { _id });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando el usuario";
        respuesta.info = error;
        res.status(500).send(respuesta);  
        console.log(error); 
    }
    //res.send("Consultar usuario " + id); // JSON.stringify(req.params)
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

