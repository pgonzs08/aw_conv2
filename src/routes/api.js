/*
 * Módulo que define un enrutador con todos los endpoints de la API REST
 * @module routes/api
*/

/* MÓDULOS A IMPORTAR */
// express
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

/* ENRUTADOR Y ENDPOINTS */
//login
router.post('/users/login', userController.checkCredentials);
router.route('/users').all( (req, res, next) => {
        next();
    })
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.get('/users/:username', userController.getUserData);

module.exports = router;