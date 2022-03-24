// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = (req, res) => {
    res.send("Crear usuarios");
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
    res.send("Consultar usuario");
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const consultarUsuarios = (req, res) => {
    res.send("Consultar usuarios");
};

module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}

