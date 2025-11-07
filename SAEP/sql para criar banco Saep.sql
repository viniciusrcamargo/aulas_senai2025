CREATE DATABASE estoque_aula;

CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    email       VARCHAR(100) NOT NULL,
    senha      VARCHAR(60) NOT NULL,
    ativo      BOOLEAN DEFAULT TRUE NOT NULL
);

SELECT * FROM usuarios;

INSERT INTO usuarios (email, senha) VALUES ('vinicius@gmail.com', '123123');

CREATE TABLE IF NOT EXISTS produtos (
    id_produto      SERIAL PRIMARY KEY,
    nome_produto    VARCHAR(100) NOT NULL,
    quantidade      INTEGER DEFAULT 0 NOT NULL,
    estoque_minimo  INTEGER DEFAULT 5 NOT NULL,
    data_cadastro   TIMESTAMP DEFAULT NOW() NOT NULL
);
select * from produtos;
DELETE FROM PRODUTOS CASCADE;

SELECT m.id_mov, m.tipo, m.quantidade, m.data_cadastro, p.nome_produto FROM movimentacoes m LEFT JOIN produtos p on m.id_produto = p.id_produto
DELETE FROM movimentacoes;
CREATE TABLE IF NOT EXISTS movimentacoes (
    id_mov       SERIAL PRIMARY KEY,
    id_produto   INTEGER NOT NULL REFERENCES produtos(id_produto)
                  ON UPDATE CASCADE ON DELETE RESTRICT,
    tipo     CHAR(1) NOT NULL CHECK (tipo IN ('E','S')),
    quantidade   INTEGER NOT NULL CHECK (quantidade > 0),
    data_cadastro     TIMESTAMP DEFAULT NOW() NOT NULL
);


