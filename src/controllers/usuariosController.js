const controller={};

controller.listar=(req,res)=>{
   req.getConnection((req,conn)=>{
       conn.query('SELECT * FROM usuario',(err,datos)=>{
           if(err){
              res.json(err);  
           }
           console.log(datos);
           res.render('calcular',{
            data:datos
           });
       });
   });
}

controller.guardar=(req,res)=>{
    console.log(req.body);
    const data=req.body;
    req.getConnection((err,conn)=>{
        const query=conn.query('INSERT INTO usuario set ?',data,(err,datos)=>{
            //res.send("Guardar ...");
            console.log(datos);
        });  
    });

}

controller.actualizar=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
       conn.query('SELECT * FROM usuario WHERE id=?',[id],(err,datos)=>{
        console.log(datos); 
        res.render('editar',{
            data:datos[0]
         });
       });
    });
}

controller.registrar=(req,res)=>{
    const {id}=req.params;
    const nuevosDatos=req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE usuario set ? WHERE id = ?',[nuevosDatos,id],(err,filas)=>{
        res.redirect('/verTablas')
      });
    });
}

controller.eliminar=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
         conn.query('DELETE FROM usuario WHERE id=?',[id],(err,filas)=>{
             res.redirect('/verTablas');
         });         
    });
}

controller.listar2=(req,res)=>{
    req.getConnection((req,conn)=>{
        conn.query('SELECT * FROM usuario',(err,datos)=>{
            if(err){
               res.json(err);  
            }
            console.log(datos);
            res.render('tablas',{
             data:datos
            });
        });
    });
 }


module.exports=controller;