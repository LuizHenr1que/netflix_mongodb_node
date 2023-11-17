const database = require('../services/database');
const Usuario = require('../models/usuario');
const UsuarioJSON= require('../data/usuario.json');

const addUsers = async () => {
    try {
        for (let usuario of UsuarioJSON){
            console.log(`inserindo ${usuario.nome}`);
            await new Usuario(usuario).save();
        }
        console.log('terminou o script')
    } catch(err) {
        console.log(err.message);
    }
}

addUsers();