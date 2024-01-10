const knex = require('knex');
const {Connection} = require('./common/connection.js')
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
      db.conn.select('*').from('pacientes').limit(200)
        .then((pacientes) => {
          resolve(pacientes);
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}

module.exports = { Paciente };
