const Sequelize=require('sequelize');
const db=require('../config/database');
db.authenticate().then(()=>{
	console.log('DB Conectada');
}).catch(error=>console.log(error));

const Viaje=db.define('viaje',{
	titulo:{
		type:Sequelize.STRING
	},
	precio:{
		type:Sequelize.INTEGER
	},
	fecha_ida:{
		type:Sequelize.DATE
	},
	fecha_vuelta:{
		type:Sequelize.DATE
	},
	imagen:{
		type:Sequelize.STRING
	},
	descripcion:{
		type:Sequelize.STRING
	},
	disponibles:{
		type:Sequelize.STRING
	}
});
module.exports=Viaje;