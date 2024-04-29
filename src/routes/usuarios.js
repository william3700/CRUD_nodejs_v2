const express=require('express');
const router=express.Router();
const controlador=require('../controllers/usuariosController');
const controller = require('../controllers/usuariosController');

router.get('/',controlador.listar);
router.post('/crear',controlador.guardar);
router.get('/verTablas',controlador.listar2);
router.get('/eliminar/:id',controlador.eliminar);
router.get('/actualizar/:id',controlador.actualizar);
router.post('/actualizar/:id',controlador.registrar);

module.exports=router;





