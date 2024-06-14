/*
 * Módulo que define un enrutador con todos los endpoints de la API REST
 * @module routes/router
*/

/* MÓDULOS A IMPORTAR */
// express
const express = require('express');
const router = express.Router();

// controlador de la API REST
const controller = require('../controllers/ec-controller');


/* ENRUTADOR Y ENDPOINTS */
//login
router.get('/login', controller.getUser);

//register
router.post('/regist', controller.createUser);

//Página de usuario
router.get('/user:id', controller.getUserPage);

//Edición de usuario
router.put('/user:id', controller.editUser);

//Eliminar usuario
router.delete('/user:id/config', controller.delUser);

//Suscripción a eventos
router.post('/event:id', controller.newSuscription);

//Anular suscripción
router.delete('/user:id/events/delSub', controller.delSuscription);

//Eventos suscritos
router.get('/user:id/events', controller.getEventsSusc);

//Creación de eventos
router.post('/event:id/createEvent', controller.newEvent);

//Eliminación de eventos
router.delete('/event:id/delEvent', controller.delEvent);

//Actualización de un evento
router.put('/event:id/updatEvent', controller.updtEvent);

//Información del evento
router.get('/event:id/info', controller.getEvent);