INSERT INTO FORNECEDOR (FORN_NOME, FORN_TELEFONE, FORN_EMAIL, FORN_CNPJ, FORN_ENDERECO)
VALUES ('Fornecedor A', '1234-5678', 'fornecedorA@example.com', '12345678000100', 'Rua A, 123');

INSERT INTO FORNECEDOR (FORN_NOME, FORN_TELEFONE, FORN_EMAIL, FORN_CNPJ, FORN_ENDERECO)
VALUES ('Fornecedor B', '8765-4321', 'fornecedorB@example.com', '98765432000100', 'Avenida B, 456');


-- Inserção de um produto com fornecedor existente
INSERT INTO PRODUTO (PROD_NOME, PROD_DESCRICAO, PROD_PONTO_REP, ID_FORN, VALOR_QUANT)
VALUES ('Teclado Gamer', 'Teclado mecânico RGB para jogos', 10, 1, 250.00);

-- Inserção de outro produto com fornecedor existente
INSERT INTO PRODUTO (PROD_NOME, PROD_DESCRICAO, PROD_PONTO_REP, ID_FORN, VALOR_QUANT)
VALUES ('Mouse Wireless', 'Mouse óptico sem fio para desktop', 5, 2, 80.50);