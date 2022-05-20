const jwt = require('jsonwebtoken');
const PRIVATE_KEY = "UTi+mo5a52qmX5L4kaMJIWIi4/4nW0F10dKz84Prtl9YLvq5irUaE2ZFJgc0ok5ImE0dkgbG2A+U/SUaJNQP6A=="

/**
 * Método para generar un token
 * @param {*} data Información que guardará el token
 */
const crearToken = (data) => {
    const token = jwt.sign(data,PRIVATE_KEY,{expiresIn: "5m"});
    return token;
}


/**
 * 
 * @param {*} token 
 */
const verificarToken = (token) => {
    try {
        return Object.keys(jwt.verify(token, PRIVATE_KEY)).length>0;
    } catch (error) {
        return false;
    }
    
}


/**
 * 
 * @param {*} token 
 */
const decodificarToken = (token) => {
    
    return jwt.verify(token, PRIVATE_KEY);
}

module.exports = {
    crearToken,
    verificarToken,
    decodificarToken
}