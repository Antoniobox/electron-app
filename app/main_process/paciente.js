const knex = require('knex');
const { Connection } = require('./common/connection.js');

class Paciente {
  constructor(setWithId = false, id = undefined, sip = undefined, dni = undefined, nombre = undefined, apellido1 = undefined) {
    if (!setWithId) {
      this._id = id;
      this._sip = sip;
      this._dni = dni;
      this._nombre = nombre;
      this._apellido1 = apellido1;
    } else {
      this.init(id).catch(error => console.error(error));
    }
  }

  async init(id) {
    const db = new Connection();

    try {
      const paciente = await db.conn
        .select()
        .from("pacientes")
        .where("id", id)
        .first();

      if (paciente) {
        console.log(JSON.stringify(paciente))
        this._id = id;
        this._sip = paciente.sip;
        this._dni = paciente.dni;
        this._nombre = paciente.nombre;
        this._apellido1 = paciente.apellido1;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getRows() {
    const db = new Connection();

    try {
      const pacientes = await db.conn.select('*').from('pacientes').limit(100);
      return pacientes;
    } catch (error) {
      throw error;
    }
  }

  static async getMedico(id) {
    const db = new Connection();

    try {
      const medico = await db.conn
        .select({
          nombre: "medicos.nombre"
        })
        .from('medicos')
        .where('pacientes.id', id)
        .join('pacientes', function () {
          this.on('pacientes.medico_id', '=', 'medicos.id');
        })
        .first();

      return medico;
    } catch (error) {
      throw error;
    }
  }

  async update() {
    const db = new Connection()
    let resultado = undefined
    try {
      resultado = await db.conn('pacientes')
      .where('id', this._id)
      .update({
        nombre: this._nombre,
        apellido1: this._apellido1
      })
    }catch(error) {
      return "Error: "+error
    }
    return "Resultado: "+resultado
  }
}

module.exports = { Paciente };
