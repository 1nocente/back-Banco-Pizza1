/************************************************************************
 * Objetivo: Criação de uma API para uma pizzaria
 * Data: 22/11/2023
 * Autor: Pedro Henrique Inocente
 * Versão: 1.0
*************************************************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var produtos = require('./module/produtos');
const produtosJson = produtos.produtos;

var categorias = require('./module/category.js');
const categoriasJson = categorias.categorias;

var users = require('./module/user.js');
const usersJson = users.user;
const app = express();

app.use((request, response, next) =>{
    
    response.header('Access-Control-Allow-Origin', '*')
   
    response.header('Acesss-Control-Allow-Methods', 'GET')

  
    app.use(cors());

  
    next()
})


app.use(cors());


app.get('/pizzas', cors(), (req, res) => {
    const listaPizzas = getListaPizzas();
    if (listaPizzas) {
        res.json(listaPizzas);
    } else {
        res.status(404).json({ erro: 'Nenhuma pizza encontrada' });
    }
});


app.get('/categorias', cors(), (req, res) => {
    const listaCategorias = getListaCategorias();
    res.json(listaCategorias);
});


app.get('/usuarios', cors(), (req, res) => {
    const listaUsuarios = getListaUsuarios();
    res.json(listaUsuarios);
});




function getListaPizzas() {
    let todasPizzas = [...produtosJson.favoritas, ...produtosJson.recomendados];
  
    let listaPizzas = todasPizzas.map(pizza => ({
        namePizza: pizza.namePizza,
        price: pizza.price
    }));

    let resultado = {
        pizzas: listaPizzas,
        quantidade: listaPizzas.length
    };

    return resultado;
}

function getListaCategorias() {
    let listaCategorias = categoriasJson.categorias.map(categoria => ({
        nome: categoria.nome,
    }));

    let resultado = {
        categorias: listaCategorias,
        quantidade: listaCategorias.length
    };

    return resultado;
}


function getListaUsuarios() {
    let listaUsuarios = usersJson.cadastro.map(usuario => ({
        userName: usuario.userName,
        email: usuario.email,
        telefone: usuario.telefone,
        localizacao: usuario.localizacao
    }));

    let resultado = {
        usuarios: listaUsuarios,
        quantidade: listaUsuarios.length
    };

    return resultado;
}


app.get('/sucos', cors(), (req, res) => {
    const listaSucos = getListaSucos();
    if (listaSucos) {
        res.json(listaSucos);
    } else {
        res.status(404).json({ erro: 'Nenhum suco encontrado' });
    }
});


function getListaSucos() {
    let listaSucos = produtosJson.sucos.map(suco => ({
        id: suco.id,
        nomeSuco: suco.nomeSuco,
        preco: suco.preco,
        imagem: suco.imagem,
        descricao: suco.descricao,
        categoria: suco.categoria,
        comentarios: suco.comentarios
    }));

    let resultado = {
        sucos: listaSucos,
        quantidade: listaSucos.length
    };

    return resultado;
}

app.get('/sorvetes', cors(), (req, res) => {
    const listaSorvetes = getListaSorvetes();
    if (listaSorvetes) {
        res.json(listaSorvetes);
    } else {
        res.status(404).json({ erro: 'Nenhum sorvete encontrado' });
    }
});

function getListaSorvetes() {
    let listaSorvetes = produtosJson.sorvetes.map(sorvete => ({
        nomeSorvete: sorvete.nomeSorvete,
        preco: sorvete.preco
    }));

    let resultado = {
        sorvetes: listaSorvetes,
        quantidade: listaSorvetes.length
    };

    return resultado;
}


app.get('/pizzas/names', cors(), (req, res) => {
    const nomesEImagens = getNomesEImagensPizzas();
    if (nomesEImagens) {
        res.json(nomesEImagens);
    } else {
        res.status(404).json({ erro: 'Nenhuma informação de pizza encontrada' });
    }
});

function getNomesEImagensPizzas() {
  
    let nomesEImagens = produtosJson.favoritas.concat(produtosJson.recomendados).map(pizza => ({
        namePizza: pizza.namePizza,
        imagem: pizza.imagem
    }));

    let resultado = {
        pizzas: nomesEImagens,
        quantidade: nomesEImagens.length
    };

    return resultado;
}


var sobremesas = require('./module/produtos');
const sobremesasJson = sobremesas.produtos.sobremesas;



app.get('/sobremesas', cors(), (req, res) => {
    const listaSobremesas = getListaSobremesas();
    res.json(listaSobremesas);
});


function getListaSobremesas() {
    let listaSobremesas = sobremesasJson.map(sobremesa => ({
        nome: sobremesa.nome,
        imagem: sobremesa.imagem
    }));

    let resultado = {
        sobremesas: listaSobremesas,
        quantidade: listaSobremesas.length
    };

    return resultado;
}


var bebidas = require('./module/produtos');
const bebidasJson = bebidas.produtos.bebidas;



app.get('/bebidas', cors(), (req, res) => {
    const listaBebidas = getListaBebidas();
    res.json(listaBebidas);
});

// Função para obter a lista de todas as bebidas
function getListaBebidas() {
    let listaBebidas = bebidasJson.map(bebida => ({
        nome: bebida.nome,
        imagem: bebida.imagem
    }));

    let resultado = {
        bebidas: listaBebidas,
        quantidade: listaBebidas.length
    };

    return resultado;
}



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



/*

node .\app.js

http://localhost:3000/pizzas
http://localhost:3000/categorias
http://localhost:3000/usuarios
http://localhost:3000/sorvetes
http://localhost:3000/sucos
http://localhost:3000/pizzas/names
http://localhost:3000/sobremesas
*/