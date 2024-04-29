const express=require('express');
const path=require('path');
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');
const app=express();

const usuariosRoutes=require('./routes/usuarios');

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3307,
    database:'IMC'
},'single'));

app.use(express.urlencoded({extended:false}));
app.use('/',usuariosRoutes);
app.use(express.static(path.join(__dirname,'publics')));


app.listen(app.get('port'),()=>{
    console.log("Servidor activo puerto 3000");
});
