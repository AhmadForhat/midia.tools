const express = require('express')
const routes = express.Router()
const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');


const usuarioController = require('../controllers/usuarioController')
const authController = require('../controllers/authController')

routes.get('/', (req,res)=>{res.render('home')})

routes.get('/cadastro', usuarioController.create);
routes.post('/cadastro', [check("name").isLength({min:3}).withMessage("O nome do usuario tem que conter no minimo 3 caracteres!"), 
check("email").isEmail().withMessage("Digite um email válido!"),
check("password").isLength({min:6}).withMessage("A senha tem que conter no mínimo 6 caracteres!")], usuarioController.store);

routes.get('/login', authController.create);
routes.post('/login', authController.store);

routes.get('/sair', authController.destroy)



module.exports = routes;