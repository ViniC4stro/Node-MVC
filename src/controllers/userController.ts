import {Request, Response} from 'express'


export const nome = ((req:Request, res:Response) =>{
    let nome: string = req.query.nome as string

    res.render("pages/nome", {
        nome
    })
})


export const idade = ((req:Request, res:Response) =>{
    res.render('pages/idade')
})


export const idadeResultado = ((req:Request, res:Response) =>{
    let exibirResul: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let anoAtual: number = new Date().getFullYear()
    idade = anoAtual - anoNascimento
    exibirResul = true
    }

    res.render("pages/idade",{
         idade,
         exibirResul
    
    })
})


export const form = ((req:Request, res:Response) =>{
    let name: string = req.query.nome as string
    let idade = req.query.age
    let telefone = req.query.tell
    let address: string = req.query.address as string
    let exibir: Boolean = true

    res.render("pages/form", {
        name,
        idade,
        telefone,
        address,
        exibir
    })
})


export const login = ((req:Request, res:Response) =>{
    res.render("pages/login")
})


export const loginAcesso = ((req:Request, res:Response) =>{
    let email: string = req.body.email
    let senha: string = req.body.password

    res.render("pages/login-acesso",{
        email,
        senha
    })
})