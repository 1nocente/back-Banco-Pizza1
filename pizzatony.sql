create database TonyPizzaria;
use TonyPizzaria;

-- Criação da tabela de endereços
CREATE TABLE endereco (
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(255),
    numero INT,
    cidade VARCHAR(255),
    estado VARCHAR(255),
    cep VARCHAR(10)
);

-- Criação da tabela de usuários
CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255),
    cpf VARCHAR(14) UNIQUE,
    nome VARCHAR(255),
    telefone VARCHAR(15),
    senha VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    endereco_id INT,
    FOREIGN KEY (endereco_id) REFERENCES endereco(endereco_id)
);
-- Criação da tabela de categorias
CREATE TABLE categoria (
    categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(255) UNIQUE
);

-- Criação da tabela de produtos
CREATE TABLE produtos (
    produto_id INT PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT,
    imagem VARCHAR(255),
    preco DECIMAL(10,2), -- Valor monetário, ajuste conforme necessário
    nome VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
);

-- Criação da tabela de pedidos
CREATE TABLE pedido (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    produto_id INT,
    usuario_id INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id), -- Supondo que exista uma tabela produtos
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Em andamento' -- Pode ser 'Em andamento', 'Concluído', etc.
    #UPDATE pedido
	#SET status = 'Concluído'
	#WHERE usuario_id = 123; -- Substitua 123 pelo ID do usuário desejado

);
-- Criação da tabela de favoritos
CREATE TABLE favoritos (
    favorito_id INT PRIMARY KEY AUTO_INCREMENT,
    produto_id INT,
    usuario_id INT,
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);
-- Criação da tabela de comentários
CREATE TABLE comentarios (
    comentario_id INT PRIMARY KEY AUTO_INCREMENT,
    imagem_usuario VARCHAR(255),
    avaliacao INT,
    comentario TEXT,
    produto_id INT,
    usuario_id INT,
    data_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

-- Inserção de dados fictícios para categorias
INSERT INTO categoria (nome_categoria) VALUES
    ('Pizza'),
    ('Bebida'),
    ('Sobremesa'),
    ('Bebidas'),
    ('Brotinho');

-- Inserção de dados fictícios para endereços
INSERT INTO endereco (rua, numero, cidade, estado, cep) VALUES
    ('Rua A', 123, 'São Paulo', 'SP', '01000-000'),
    ('Rua B', 456, 'São Paulo', 'SP', '02000-000'),
    ('Rua C', 789, 'São Paulo', 'SP', '03000-000'),
    ('Rua D', 101, 'São Paulo', 'SP', '04000-000'),
    ('Rua E', 112, 'São Paulo', 'SP', '05000-000');
    
    -- Inserção de dados fictícios para usuários com números mais normais
INSERT INTO usuarios (imagem, cpf, nome, telefone, senha, email, endereco_id) VALUES
    ('imagem1.jpg', '111.222.333-44', 'Ana Silva', '11 1234-5678', 'senha123', 'ana@email.com', 1),
    ('imagem2.jpg', '222.333.444-55', 'Carlos Santos', '22 2345-6789', 'senha456', 'carlos@email.com', 2),
    ('imagem3.jpg', '333.444.555-66', 'Fernanda Oliveira', '33 3456-7890', 'senha789', 'fernanda@email.com', 3),
    ('imagem4.jpg', '444.555.666-77', 'Gustavo Pereira', '44 4567-8901', 'senhaabc', 'gustavo@email.com', 4),
    ('imagem5.jpg', '555.666.777-88', 'Isabela Martins', '55 5678-9012', 'senhaxyz', 'isabela@email.com', 5);
    
    -- Inserção de dados fictícios para produtos
INSERT INTO produtos (descricao, imagem, preco, nome, categoria_id) VALUES
    ('Pizza de Calabresa', 'calabresa.jpg', 25.99, 'Pizza de Calabresa', 1),
    ('Refrigerante 2L', 'refrigerante.jpg', 7.50, 'Refrigerante 2L', 2),
    ('Sorvete de Chocolate', 'sorvete.jpg', 15.00, 'Sorvete de Chocolate', 3),
    ('Suco de Laranja', 'suco.jpg', 5.99, 'Suco de Laranja', 4),
    ('Brotinho de Queijo', 'brotinho.jpg', 9.99, 'Brotinho de Queijo', 5),

    ('Pizza Margherita', 'margherita.jpg', 22.99, 'Pizza Margherita', 1),
    ('Água Mineral 500ml', 'agua.jpg', 3.00, 'Água Mineral 500ml', 2),
    ('Sorvete de Morango', 'sorvete_morango.jpg', 18.00, 'Sorvete de Morango', 3),
    ('Suco de Maçã', 'suco_maca.jpg', 6.99, 'Suco de Maçã', 4),
    ('Brotinho de Calabresa', 'brotinho_calabresa.jpg', 10.99, 'Brotinho de Calabresa', 5),

    ('Pizza Quatro Queijos', 'quatro_queijos.jpg', 24.99, 'Pizza Quatro Queijos', 1),
    ('Coca-Cola 2L', 'coca_cola.jpg', 8.50, 'Coca-Cola 2L', 2),
    ('Sorvete de Baunilha', 'sorvete_baunilha.jpg', 16.00, 'Sorvete de Baunilha', 3),
    ('Suco de Uva', 'suco_uva.jpg', 7.99, 'Suco de Uva', 4),
    ('Brotinho de Frango', 'brotinho_frango.jpg', 11.99, 'Brotinho de Frango', 5),

    ('Pizza Portuguesa', 'portuguesa.jpg', 26.99, 'Pizza Portuguesa', 1),
    ('Guaraná 2L', 'guarana.jpg', 7.00, 'Guaraná 2L', 2),
    ('Sorvete de Limão', 'sorvete_limao.jpg', 14.00, 'Sorvete de Limão', 3),
    ('Suco de Abacaxi', 'suco_abacaxi.jpg', 6.49, 'Suco de Abacaxi', 4),
    ('Brotinho de Chocolate', 'brotinho_chocolate.jpg', 9.99, 'Brotinho de Chocolate', 5),

    ('Pizza Vegetariana', 'vegetariana.jpg', 23.99, 'Pizza Vegetariana', 1),
    ('Sprite 2L', 'sprite.jpg', 7.25, 'Sprite 2L', 2),
    ('Sorvete de Manga', 'sorvete_manga.jpg', 17.00, 'Sorvete de Manga', 3),
    ('Suco de Pêssego', 'suco_pessego.jpg', 6.79, 'Suco de Pêssego', 4),
    ('Brotinho de Presunto', 'brotinho_presunto.jpg', 10.99, 'Brotinho de Presunto', 5);




