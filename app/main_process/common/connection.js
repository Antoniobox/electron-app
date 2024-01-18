const knex = require('knex');
const {DB_CONFIG} = require('./db_config')
class Connection {
	constructor() {
		if(!Connection.instance || !this.conn){
			this.conn = knex({
				client: DB_CONFIG.CLIENT,
				connection: {
					host: DB_CONFIG.HOST,
					user: DB_CONFIG.USER,
					password: DB_CONFIG.PASSWORD,
					database: DB_CONFIG.DATABASE,
					port: DB_CONFIG.PORT,
				}
			});
			Connection.instance = this;
		}
	}
}

module.exports = {Connection}