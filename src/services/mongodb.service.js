const { ObjectID } = require("bson");
const { MongoClient, ObjectId } = require("mongodb");

// Connection URI
const uri = process.env.URI_MONGODB;

// Create a new MongoClient
const client = new MongoClient(uri);

const conectarDB = async () => {
  // Connect the client to the server
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB);
  return DB;
}

const leerDocumentos = async (nombreColeccion, filtro) => {
  let db = await conectarDB();
  let coleccion = db.collection(nombreColeccion);
  filtro = filtro ? filtro : {};
  obtenerFiltroId(filtro, null, true); // Para cuando la consulta sea para un usuario
  return coleccion.find(filtro).toArray();
}


/**
 * Convirtiendo el filtro._id en un objetoId
 * @param {*} filtro 
 * @param {*} nuevoDocumento 
 * @param {*} esConsulta Indica si el metodo se invoca desde leerDocumentos
 */
const obtenerFiltroId = (filtro, nuevoDocumento, esConsulta = false) => {

  if(esConsulta){
    //Cuando es consulta
    if (filtro && filtro._id) {
      filtro._id = new ObjectID(filtro._id);
    }
  }else{
    if (esConsulta && filtro && filtro._id) {
      filtro._id = new ObjectID(filtro._id);
    }else{
      // Cuando viene de modificar o eliminar documento 
      if(filtro  &&  filtro._id){
        filtro._id = new ObjectID(filtro._id);
        if (nuevoDocumento) {
          nuevoDocumento._id = filtro._id;
        }
      }else{
        // Cuando obtenerFiltroId se invoca desde modificar o eliminar
        throw new Error("El id es obligatorio");
      }
    }
  }
}

const agregarDocumento = async (nombreColeccion, informacion)=>{
  let db = await conectarDB();
  let coleccion = db.collection(nombreColeccion);
  return await coleccion.insertOne(informacion);
}

const eliminarDocumento = async (nombreColeccion, filtro)=>{
  obtenerFiltroId(filtro);
  let db = await conectarDB();
  let coleccion = db.collection(nombreColeccion);
  return await coleccion.deleteOne(filtro);
}

const modificarDocumento = async (nombreColeccion, filtro, nuevoDocumento)=>{
  obtenerFiltroId(filtro, nuevoDocumento);
  let db = await conectarDB();
  let coleccion = db.collection(nombreColeccion);
  return await coleccion.replaceOne(filtro, nuevoDocumento);
}
 

//run().catch(console.dir);

module.exports = {
  leerDocumentos,
  agregarDocumento,
  eliminarDocumento,
  modificarDocumento};