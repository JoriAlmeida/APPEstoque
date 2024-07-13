INSERT INTO FORNECEDOR (FORN_NOME, FORN_TELEFONE, FORN_EMAIL, FORN_CNPJ, FORN_ENDERECO, FORN_STATUS)
VALUES ('Fornecedor A', '1234-5678', 'fornecedorA@example.com', '12345678000100', 'Rua A, 123', 'ativo');

INSERT INTO FORNECEDOR (FORN_NOME, FORN_TELEFONE, FORN_EMAIL, FORN_CNPJ, FORN_ENDERECO, FORN_STATUS)
VALUES ('Fornecedor B', '8765-4321', 'fornecedorB@example.com', '98765432000100', 'Avenida B, 456','inativo');


-- Inserção de um produto com fornecedor existente
INSERT INTO PRODUTO (PROD_NOME, PROD_DESCRICAO, PROD_PONTO_REP, FK_ID_FORN, VALOR_QUANT, PROD_STATUS) 
VALUES ('Teclado Gamer', 'Teclado mecânico RGB para jogos', 10, 1, 250.00, 'ativo');

-- Inserção de outro produto com fornecedor existente
INSERT INTO PRODUTO (PROD_NOME, PROD_DESCRICAO, PROD_PONTO_REP, FK_ID_FORN, VALOR_QUANT, PROD_STATUS)
VALUES ('Mouse Wireless', 'Mouse óptico sem fio para desktop', 5, 2, 80.50, 'inativo');


-- Inserção com USU_PERMISSAO = 1
INSERT INTO USUARIO (USU_PERMISSAO, USU_NOME, USU_CPF, EMAIL, USU_SENHA)
VALUES (1, 'Nome 1', 'CPF 1', 'admin@admin.com', 'admin');

-- Inserção com USU_PERMISSAO = 2
INSERT INTO USUARIO (USU_PERMISSAO, USU_NOME, USU_CPF, EMAIL, USU_SENHA)
VALUES (2, 'Nome 2', 'CPF 2', 'email2@example.com', 'senha2');

-- Inserir dados de uma loja fictícia
INSERT INTO loja (loja_nome, loja_endereco, loja_contato)
VALUES ('Loja A', 'Rua Comercial, 123', '(11) 9876-5432');

-- Inserir dados de outra loja fictícia
INSERT INTO loja (loja_nome, loja_endereco, loja_contato)
VALUES ('Loja B', 'Av. Principal, 456', '(22) 1234-5678');