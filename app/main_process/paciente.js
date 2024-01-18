const knex = require('knex');
const {Connection} = require('./common/connection.js')

/**
 * Clase Paciente
 * Modelo de la entidad Paciente
 */
class Paciente {
  constructor(id = undefined, sip = undefined, dni = undefined, nombre = undefined, apellido1 = undefined) {
    if (id != undefined) {
      this.id = id;
      this.sip = sip;
      this.dni = dni;
      this.nombre = nombre;
      this.apellido1 = apellido1;
    }
  }

  static getRows() {
    const db = new Connection()

    return new Promise((resolve, reject) => {
      db.conn.select('*').from('pacientes').limit(100)
        .then((pacientes) => {
          resolve(pacientes);
        })
        .catch((error) => {
          reject(error);
        })
    });
  }

  static getMedico(id) {
    const db = new Connection()
    return new Promise((resolve, reject)=> {
      db.conn.select({
        nombre: "medicos.nombre"
      }).from('medicos').where('pacientes.id', id).join('pacientes', function(){
        this.on('pacientes.medico_id','=','medicos.id')
      }).then((medico)=>{
        console.log(medico)
        resolve(medico)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
}

module.exports = { Paciente };
