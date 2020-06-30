//Importar express
const express=require('express');
const path=require('path');
const routes=require('./routes');
const configs=require('./config');
const bodyParser=require('body-parser');
//Configurar Express
const app=express();
///Habilitar pug
app.set('view engine','pug');
//Añadir las vistas
app.set('views',path.join(__dirname,'./views'));
//Cargar una carpeta estatica llamada public
app.use(express.static('public'));
//Validamos si estamos en desarrollo o produccion
const config=configs[app.get('env')];
app.locals.titulo=config.nombresitio;
//Muestra el año actual
app.use((req,res,next)=>{
	const fecha=new Date();
	res.locals.fechaActual=fecha.getFullYear();
	res.locals.ruta=req.path;
	return next();
});
app.use(bodyParser.urlencoded({extended:true}));
//Cargar las rutas
app.use('/',routes());
//Puerto y host para la app
const host=process.env.HOST||'0.0.0.0';
const port=process.env.PORT||3000;
app.listen(port,host,()=>{
	console.log('El servidor esta funcionando');
});
