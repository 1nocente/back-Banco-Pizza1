/************************************************************
 * Objetivo: Trazer informações sobre os produtos da pizzara.
 * Data: 22/11/2023
 * Autor: Pedro Henrique Inocente
 * Versão: 1.0
 ***********************************************************/


// Importando o JSON de produtos
var produtos = require('./produtos')
const produtosJson = produtos.produtos

var user = require('./user.js')
const userJson = user.user

var category = require('./category.js')
const categoryJson = category.categorias


//Criar uma função (getListaPizzas) que retorna a lista de todas as pizzas


const getListaPizzas = function () {
  let todasPizzas = produtosJson.favoritas.slice();
  todasPizzas.push.apply(todasPizzas, produtosJson.Recomendados);
  
  let listaPizzas = [];
  let status = false;

  for (let i = 0; i < todasPizzas.length; i++) {
    let pizza = todasPizzas[i];
    let pizzaInfo = {
      namePizza: pizza.namePizza,
      price: pizza.price
    };

    listaPizzas.push(pizzaInfo);
    status = true;
  }

  let resultado = {
    pizzas: listaPizzas,
    quantidade: listaPizzas.length
  };

  if (status) {
    return resultado;
  } else {
    return false;
  }
};

// Chamada da função
console.log(getListaPizzas());



// Importando o JSON de categorias
var categorias = require('./category.js');
const categoriasJson = categorias.categorias;

// Criar uma função (getListaCategorias) que retorna a lista de todas as categorias
const getListaCategorias = function () {
  let listaCategorias = [];

  for (let i = 0; i < categoriasJson.categorias.length; i++) {
    let categoria = categoriasJson.categorias[i];
    let categoriaInfo = {
      nome: categoria.nome,
    };

    listaCategorias.push(categoriaInfo);
  }

  let resultado = {
    categorias: listaCategorias,
    quantidade: listaCategorias.length
  };

  return resultado;
};

// Chamada da função
console.log(getListaCategorias());


// Importando o JSON de usuários
var users = require('./user.js');
const usersJson = users.user;

// Criar uma função (getListaUsuarios) que retorna a lista de todos os usuários
const getListaUsuarios = function () {
  let listaUsuarios = [];

  for (let i = 0; i < usersJson.cadastro.length; i++) {
    let usuario = usersJson.cadastro[i];
    let usuarioInfo = {
      userName: usuario.userName,
      email: usuario.email,
      telefone: usuario.telefone,
      localizacao: usuario.localizacao
    };

    listaUsuarios.push(usuarioInfo);
  }

  let resultado = {
    usuarios: listaUsuarios,
    quantidade: listaUsuarios.length
  };

  return resultado;
};

// Chamada da função
console.log(getListaUsuarios());

// Importando o JSON de sucos
var produtos = require('./produtos');
const sucosJson = produtos.produtos.sucos;

// Criar uma função (getListaSucos) que retorna a lista de todos os sucos
const getListaSucos = function () {
    let listaSucos = [];

    for (let i = 0; i < sucosJson.length; i++) {
        let suco = sucosJson[i];
        let sucoInfo = {
            id: suco.id,
            nomeSuco: suco.nomeSuco,
            preco: suco.preco,
            imagem: suco.imagem,
            descricao: suco.descricao,
            categoria: suco.categoria,
            comentarios: suco.comentarios
        };

        listaSucos.push(sucoInfo);
    }

    let resultado = {
        sucos: listaSucos,
        quantidade: listaSucos.length
    };

    return resultado;
};

// Chamada da função
console.log(getListaSucos());
