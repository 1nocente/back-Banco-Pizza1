const { categorias } = require("./category")

var produtos = {
    pizzaria: 'Tony Pizzaria',
    favoritas: [
      {
        id: '1',
        namePizza: 'Pizza de calabresa com queijo',
        price: 'R$ 16,00',
        image: 'Pizza1',
        description: 'Uma clássica combinação de calabresa suculenta e queijo derretido, perfeita para os amantes de sabores tradicionais.',
        categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '2',
        namePizza: 'Pizza de peperonni com queijo',
        price: 'R$ 19,00',
        image: 'Pizza2',
        description: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '3',
        namePizza: 'Pizza de frango com catupiry',
        price: 'R$ 22,00',
        image: 'Pizza3',
        description: 'Uma opção irresistível que une a suavidade do frango ao sabor marcante do catupiry, proporcionando uma experiência única.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '4',
        namePizza: 'Pizza de marguerita',
        price: 'R$ 20,00',
        image: 'Pizza4',
        description: 'A clássica e elegante pizza Marguerita, com tomates frescos, mozzarella de alta qualidade e manjericão. Simplesmente deliciosa.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '5',
        namePizza: 'Pizza de quatro queijos',
        price: 'R$ 25,00',
        image: 'Pizza5',
        description: 'Uma festa de queijos com uma mistura harmoniosa de sabores. Para os amantes de queijo, esta pizza é um verdadeiro deleite.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '6',
        namePizza: 'Pizza de portuguesa',
        price: 'R$ 28,00',
        image: 'Pizza6',
        description: 'Saboreie a combinação de presunto, ovos, cebola, azeitonas e queijo. Uma explosão de sabores que remete à culinária portuguesa.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '7',
        namePizza: 'Pizza de vegetariana',
        price: 'R$ 24,00',
        image: 'Pizza7',
        description: 'Uma opção saudável e repleta de sabor, com uma variedade de vegetais frescos e queijo derretido. Ideal para os amantes da culinária vegetariana.'
        , categoria: categorias.categorias[1]
        , comentarios: [] 
      },
      {
        id: '8',
        namePizza: 'Pizza de chocolate',
        price: 'R$ 27,00',
        image: 'Pizza8',
        description: 'Uma tentação doce que combina massa crocante com generosas camadas de chocolate derretido. Perfeita para os amantes de sobremesas.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '9',
        namePizza: 'Pizza de Nutella',
        price: 'R$ 30,00',
        image: 'Pizza9',
        description: 'Uma pizza indulgente coberta com o irresistível creme de avelã. Uma experiência única para os apaixonados por Nutella.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      },
      {
        id: '10',
        namePizza: 'Pizza de bacon',
        price: 'R$ 29,00',
        image: 'Pizza10',
        description: 'Para os amantes de bacon, esta pizza combina a crocância do bacon com o sabor do queijo derretido. Uma escolha saborosa e reconfortante.'
        , categoria: categorias.categorias[1] 
        , comentarios: []
      }
    ],
    recomendados: [
        {
            id: '1',
            namePizza: 'Pizza de peperoni com queijo e tomate',
            price: 'R$20,00',
            image:'Pizza1',
            description: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.'
            , comentarios: []
          },
          {
            id: '2',
            namePizza: 'Pizza brotinho com queijo e tomate',
            price: 'R$12,00',
            image:'Pizza2',
            description: 'Uma opção mais leve e perfeita para uma refeição individual, com a clássica combinação de queijo e tomate.'
            , comentarios: []
          },
          {
            id: '3',
            namePizza: 'Pizza de calabresa com queijo',
            price: 'R$16,00',
            image: 'Pizza3',
            description: 'A clássica pizza de calabresa, com sua combinação irresistível de sabores que agrada a todos os paladares.'
            , comentarios: []
          },
          {
            id: '4',
            namePizza: 'Pizza de frango com catupiry',
            price: 'R$22,00',
            image: 'Pizza4',
            description: 'Uma opção indulgente com a suculência do frango e a cremosidade do catupiry, uma experiência que você não vai esquecer.'
            , comentarios: []
          },
          {
            id: '5',
            namePizza: 'Pizza de marguerita',
            price: 'R$20,00',
            image: 'Pizza5',
            description: 'A tradicional pizza Marguerita, com ingredientes frescos e sabores autênticos.'
            , comentarios: []
          },
          {
            id: '6',
            namePizza: 'Pizza de quatro queijos',
            price: 'R$25,00',
            image: 'Pizza6',
            description: 'Uma versão irresistível da pizza de quatro queijos, perfeita para os amantes de queijo em todas as suas formas.'
            , comentarios: []
          },
          {
            id: '7',
            namePizza: 'Pizza de portuguesa',
            price: 'R$28,00',
            image: 'Pizza7',
            description: 'Uma deliciosa combinação de ingredientes que trazem à tona os sabores da culinária portuguesa.'
            , comentarios: []
          },
          {
            id: '8',
            namePizza: 'Pizza de vegetariana',
            price: 'R$24,00',
            image: 'Pizza8',
            description: 'Uma explosão de cores e sabores, com uma variedade de vegetais frescos que tornam essa pizza uma escolha saudável e deliciosa.'
            , comentarios: []
          },
          {
            id: '9',
            namePizza: 'Pizza de chocolate',
            price: 'R$27,00',
            image: 'Pizza9',
            description: 'Uma indulgência doce com camadas generosas de chocolate derretido, proporcionando uma experiência decadente.'
            , comentarios: []
          },
          {
            id: '10',
            namePizza: 'Pizza de Nutella',
            price: 'R$30,00',
            image: 'Pizza10',
            description: 'A pizza dos amantes de Nutella, com a irresistível cremosidade do creme de avelã.'
            , comentarios: []
          }
    ],
    bebidas: [
        {
          id: '1',
          drinkName: 'Coca-cola 2L',
          price: 'R$ 14,99',
          description: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          image: 'bebida1'
          , categorias: categorias.categorias[2]
        },
        {
          id: '2',
          drinkName: 'Cerveja Heineken',
          price: 'R$ 17,99',
          description: 'Cerveja Lata 350ml',
          image: 'bebida2'
          , categorias: categorias.categorias[2]
        },
        {
          id: '3',
          drinkName: 'Suco de laranja 1L',
          price: 'R$ 10,99',
          description: 'Suco de laranja natural',
          image: 'bebida3'
          , categorias: categorias.categorias[2]
        },
        {
          id: '4',
          drinkName: 'Refrigerante Guaraná Antártica 2L',
          price: 'R$ 13,99',
          description: 'Refrigerante Garrafa 2L',
          image: 'bebida4'
          , categorias: categorias.categorias[2]
        },
        {
          id: '5',
          drinkName: 'Água mineral 500ml',
          price: 'R$ 3,99',
          description: 'Água mineral natural',
          image: 'bebida5'
          , categorias: categorias.categorias[2]
        },
        {
          id: '6',
          drinkName: 'Cerveja Brahma 350ml',
          price: 'R$ 5,99',
          description: 'Cerveja Lata 350ml',
          image: 'bebida6'
          , categorias: categorias.categorias[2]
        },
        {
          id: '7',
          drinkName: 'Suco de uva 1L',
          price: 'R$ 12,99',
          description: 'Suco de uva natural',
          image: 'bebida7'
          , categorias: categorias.categorias[2]
        },
        {
          id: '8',
          drinkName: 'Refrigerante Sprite 2L',
          price: 'R$ 12,99',
          description: 'Refrigerante Garrafa 2L',
          image: 'bebida8'
          , categorias: categorias.categorias[2]
        }
      ],
      sucos: [
        {
            id: '1',
            nomeSuco: 'Suco de laranja',
            preco: 'R$ 5,00',
            imagem: 'SucoLaranja',
            descricao: 'Refrescante suco de laranja, preparado com laranjas frescas e naturais.',
            categoria: categorias.categorias[3],
            comentarios: []
        },
        {
            id: '2',
            nomeSuco: 'Suco de maçã',
            preco: 'R$ 6,00',
            imagem: 'SucoMaca',
            descricao: 'Delicioso suco de maçã, feito com maçãs maduras e suculentas.',
            categoria: categorias.categorias[3],
            comentarios: []
        },
        {
            id: '3',
            nomeSuco: 'Suco de abacaxi',
            preco: 'R$ 7,00',
            imagem: 'SucoAbacaxi',
            descricao: 'Suco tropical de abacaxi, uma explosão de sabores tropicais em cada gole.',
            categoria: categorias.categorias[3],
            comentarios: []
        },
        {
            id: '4',
            nomeSuco: 'Suco de morango',
            preco: 'R$ 8,00',
            imagem: 'SucoMorango',
            descricao: 'Suco refrescante de morango, preparado com morangos frescos e suculentos.',
            categoria: categorias.categorias[3],
            comentarios: []
        },
        {
            id: '5',
            nomeSuco: 'Suco detox',
            preco: 'R$ 9,00',
            imagem: 'SucoDetox',
            descricao: 'Suco detox para uma opção saudável, feito com uma mistura de frutas e vegetais frescos.',
            categoria: categorias.categorias[3],
            comentarios: []
        }
    ],
      pizzasBrotinho: [
          {
              id: '1',
              nomePizzaBrotinho: 'Brotinho de calabresa',
              preco: 'R$ 8,00',
              imagem: 'BrotinhoCalabresa',
              descricao: 'Versão em tamanho reduzido da clássica pizza de calabresa, perfeita para uma porção individual.',
              categoria: categorias.categorias[4],
              comentarios: []
          },
          {
              id: '2',
              nomePizzaBrotinho: 'Brotinho de marguerita',
              preco: 'R$ 7,00',
              imagem: 'BrotinhoMarguerita',
              descricao: 'Pequeno brotinho com os sabores clássicos da pizza Marguerita, ideal para um lanche rápido.',
              categoria: categorias.categorias[4],
              comentarios: []
          },
          {
              id: '3',
              nomePizzaBrotinho: 'Brotinho de quatro queijos',
              preco: 'R$ 9,00',
              imagem: 'BrotinhoQuatroQueijos',
              descricao: 'Delicioso brotinho com uma mistura de quatro queijos, proporcionando uma explosão de sabor em cada mordida.',
              categoria: categorias.categorias[4],
              comentarios: []
          },
          {
              id: '4',
              nomePizzaBrotinho: 'Brotinho de pepperoni',
              preco: 'R$ 8,50',
              imagem: 'BrotinhoPepperoni',
              descricao: 'Pequeno brotinho com generosas fatias de pepperoni, para os amantes de sabores mais intensos.',
              categoria: categorias.categorias[4],
              comentarios: []
          },
          {
              id: '5',
              nomePizzaBrotinho: 'Brotinho vegetariano',
              preco: 'R$ 7,50',
              imagem: 'BrotinhoVegetariano',
              descricao: 'Opção em tamanho reduzido com uma variedade de vegetais frescos, perfeito para os amantes da culinária vegetariana.',
              categoria: categorias.categorias[4],
              comentarios: []
          }
      ],
      sorvetes: [
        {
            id: '1',
            nomeSorvete: 'Sorvete de baunilha',
            preco: 'R$ 6,00',
            imagem: 'SorveteBaunilha',
            descricao: 'Sorvete cremoso de baunilha, uma opção clássica e deliciosa para todos os gostos.',
            categoria: categorias.categorias[5],
            comentarios: []
        },
        {
            id: '2',
            nomeSorvete: 'Sorvete de chocolate',
            preco: 'R$ 7,00',
            imagem: 'SorveteChocolate',
            descricao: 'Sorvete rico em chocolate, perfeito para os amantes de sobremesas com sabor intenso.',
            categoria: categorias.categorias[5],
            comentarios: []
        },
        {
            id: '3',
            nomeSorvete: 'Sorvete de morango',
            preco: 'R$ 6,50',
            imagem: 'SorveteMorango',
            descricao: 'Sorvete refrescante de morango, feito com pedaços de frutas reais.',
            categoria: categorias.categorias[5],
            comentarios: []
        },
        {
            id: '4',
            nomeSorvete: 'Sorvete de pistache',
            preco: 'R$ 8,00',
            imagem: 'SorvetePistache',
            descricao: 'Sorvete de pistache, uma opção única para os apreciadores de sabores diferenciados.',
            categoria: categorias.categorias[5],
            comentarios: []
        },
        {
            id: '5',
            nomeSorvete: 'Sorvete misto',
            preco: 'R$ 7,50',
            imagem: 'SorveteMisto',
            descricao: 'Combinação de sorvetes de baunilha, chocolate e morango em uma única porção.',
            categoria: categorias.categorias[5],
            comentarios: []
        }
    ],
    sobremesas: [
      {
          id: '1',
          nomeSobremesa: 'Cheesecake de morango',
          preco: 'R$ 10,00',
          imagem: 'CheesecakeMorango',
          descricao: 'Delicioso cheesecake com cobertura de morangos frescos, uma sobremesa irresistível.',
          categoria: categorias.categorias[6],
          comentarios: []
      },
      {
          id: '2',
          nomeSobremesa: 'Torta de chocolate belga',
          preco: 'R$ 12,00',
          imagem: 'TortaChocolateBelga',
          descricao: 'Torta decadente de chocolate belga, para os amantes de sobremesas ricas e indulgentes.',
          categoria: categorias.categorias[6],
          comentarios: []
      },
      {
          id: '3',
          nomeSobremesa: 'Pavê de nozes',
          preco: 'R$ 9,50',
          imagem: 'PaveNozes',
          descricao: 'Pavê delicioso com camadas de creme e nozes crocantes, uma opção clássica e saborosa.',
          categoria: categorias.categorias[6],
          comentarios: []
      },
      {
          id: '4',
          nomeSobremesa: 'Mousse de maracujá',
          preco: 'R$ 8,00',
          imagem: 'MousseMaracuja',
          descricao: 'Mousse leve e refrescante de maracujá, uma sobremesa perfeita para os dias mais quentes.',
          categoria: categorias.categorias[6],
          comentarios: []
      },
      {
          id: '5',
          nomeSobremesa: 'Tiramisu',
          preco: 'R$ 11,00',
          imagem: 'Tiramisu',
          descricao: 'Clássico tiramisu italiano, com camadas de biscoitos de champagne e creme de mascarpone.',
          categoria: categorias.categorias[6],
          comentarios: []
      }
  ]
}
module.exports = {
  produtos
}