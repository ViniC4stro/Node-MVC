import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'


const router = Router()

//  CRIAR A ROTA HOME
router.get('/', homeController.home)

// CRIAR A ROTA CONTATO
router.get('/contato', infoController.contato)

// CRIAR A ROTA SOBRE
router.get('/sobre', infoController.sobre)

// CRIAR A ROTA NOME   
router.get('/nome', userController.nome)

// CRIANDO A ROTA IDADE     
router.get('/idade', userController.idade)

// CRIANDO A ROTA IDADE-RESULTADO
router.post('/idade-resultado', userController.idadeResultado)

// CRIANDO A ROTA FORM
router.get('/form', userController.form)

// CRIANDO A ROTA LOGIN
router.get('/login', userController.login)

// CRIANDO A ROTA LOGIN-ACESSO
router.post('/login-acesso', userController.loginAcesso)




/*
router.get('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string

    res.render("pages/nome", {
        nome
    })
})

*/


export default router