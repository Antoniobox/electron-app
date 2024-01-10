const knex = require('knex');
class Connection {
	constructor() {
		if(!Connection.instance){
			this.conn = knex({
				client: 'mysql',
				connection: {
					host: '127.0.0.1',
					user: 'root',
					password: '',
					database: 'hospital',
					port: 3306,
					charset: 'utf8mb4'
				}
			});
			Connection.instance = this;
		}
	}
}

module.exports = {Connection}