CREATE TABLE Email (
  id_email SERIAL,
  email VARCHAR(50),
  PRIMARY KEY (id_email)
);

CREATE TABLE Telefone(
  id_telefone SERIAL,
  telefone BIGINT,
  PRIMARY KEY (id_telefone)
);

CREATE TABLE Endereco (
  id_endereco SERIAL,
  logradouro VARCHAR(50),
  numero INT,
  cidade VARCHAR(50),
  estado VARCHAR(30),
  pais VARCHAR(30),
  cep INT,
  PRIMARY KEY (id_endereco)
);

CREATE TABLE Produto (
  id_produto SERIAL,
  cnpj BIGINT,
  nome VARCHAR(50),
  preco DECIMAL(5, 2),
  quantidade INT,
  PRIMARY KEY (id_produto)
);

CREATE TABLE Fornecedor (
  cnpj BIGINT unique NOT NULL,
  id_email INT,
  id_endereco INT,
  id_telefone INT,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (cnpj),
  FOREIGN KEY (id_endereco) 
  	REFERENCES endereco (id_endereco)
);

CREATE TABLE Cliente(
  cpf BIGINT UNIQUE not NULL,
  id_email INT,
  id_endereco INT,
  id_telefone INT,
  id_pedido INT,
  id_rastreio INT,
  nome VARCHAR(50) not NULL,
  PRIMARY KEY (cpf)
);

CREATE TABLE Logistica(
  id_rastreio SERIAL,
  cnpj BIGINT,
  id_pedido INT,
  cpf BIGINT,
  PRIMARY KEY (id_rastreio)
);

CREATE TABLE Pedido(
  id_pedido SERIAL,
  id_produto INT,
  cpf BIGINT,
  quantidade INT,
  preco NUMERIC(5, 2),
  preco_total NUMERIC(5, 2),
  PRIMARY KEY (id_pedido)
);

alter table produto
	add CONSTRAINT FK_produto_cnpj 
    FOREIGN KEY (cnpj) 
    REFERENCES fornecedor(cnpj);

alter table fornecedor
	add CONSTRAINT FK_fornecedor_email 
    FOREIGN key (id_email) 
    REFERENCES email(id_email);
ALTER TABLE fornecedor
    add CONSTRAINT FK_fornecedor_telefone 
    FOREIGN key (id_telefone) 
    REFERENCES telefone(id_telefone);
alter table fornecedor
	add CONSTRAINT FK_fornecedor_endereco 
    FOREIGN key (id_endereco) 
    REFERENCES endereco(id_endereco);

alter table cliente
	add CONSTRAINT FK_cliente_email 
    FOREIGN key (id_email) 
    REFERENCES email(id_email);
alter table cliente
	add CONSTRAINT FK_cliente_endereco 
    FOREIGN key (id_endereco) 
    REFERENCES endereco(id_endereco);
ALTER TABLE cliente
    add CONSTRAINT FK_cliente_telefone 
    FOREIGN key (id_telefone) 
    REFERENCES telefone(id_telefone);
ALTER TABLE cliente
	add CONSTRAINT FK_cliente_pedido 
    FOREIGN KEY (id_pedido) 
    REFERENCES pedido(id_pedido);
alter table cliente
	add CONSTRAINT FK_cliente_rastreio 
    FOREIGN KEY (id_rastreio) 
    REFERENCES logistica(id_rastreio);
 
alter table logistica
	add CONSTRAINT FK_logistica_cnpj 
    FOREIGN KEY (cnpj) 
    REFERENCES fornecedor(cnpj);
alter table logistica
	add CONSTRAINT FK_logistica_pedido 
    FOREIGN KEY (id_pedido) 
    REFERENCES pedido(id_pedido);
alter table logistica
	add CONSTRAINT FK_logistica_cpf 
    FOREIGN KEY (cpf) 
    REFERENCES cliente(cpf);
        
alter table pedido
	add CONSTRAINT FK_pedido_produto 
    FOREIGN KEY (id_produto) 
    REfERENCES produto(id_produto);
alter table pedido
	add CONSTRAINT FK_pedido_cpf 
    FOREIGN KEY (cpf) 
    REFERENCES cliente(cpf);
    
DROP TABLE demo

insert into cliente (cpf, nome) 
	values (98765432101, 'Paulo Lima');
insert into email (email) 
	values ('paulo@gmail.com');
INSERT into telefone (telefone) 
	values (11678912345);
INSERT INTO endereco (logradouro, numero, cidade, estado, pais, cep) 
	values ('Rua Pontes', 32, 'São José dos Campos', 'São Paulo', 'Brasil', 07600789);

insert into cliente (cpf, nome) 
	values (24365787912, 'João Moura');
insert into email (email) 
	values ('moura@bol.com');
INSERT into telefone (telefone) 
	values ('21765810987');
INSERT INTO endereco (logradouro, numero, cidade, estado, pais, cep) 
	values ('Rua Dos Ferreiros', 321, 'Niteroi', 'Rio de Janeiro', 'Brasil', 23456000);

/*Inserção de Produtos*/

insert into produto (nome, preco, quantidade)
	values ('Whisky Lamas Wine Cask', 169.25, 10);
insert into produto (nome, preco, quantidade)
	values ('Cachaça Casa Amarela', 39.43, 8);
insert into produto (nome, preco, quantidade)
	values ('Cachaça Claudionor', 52.49, 6);
insert into produto (nome, preco, quantidade)
	values ('Cerveja Flyship', 9.69, 20);

/*Inserção de dados de Fornecedor*/

insert into fornecedor (cnpj, nome) 
	values (32797397000180, 'Lamas Destilaria LTDA');
insert into email (email) 
	values ('comercial@lamasdc.com.br');
INSERT into telefone (telefone) 
	values ('3137121177');
INSERT INTO endereco (logradouro, numero, cidade, estado, pais, cep) 
	values ('R. Argemiro Cardoso', 165, 'Matozinhos', 'Minas Gerais', 'Brasil', 35720000);

insert into fornecedor (cnpj, nome) 
	values (54374678000123, 'cachaca.com.br');
insert into email (email) 
	values ('sac@cachaca.com.br');
INSERT into telefone (telefone) 
	values ('1150439337');
INSERT INTO endereco (logradouro, numero, cidade, estado, pais, cep) 
	values ('R. Prof. Atílio Innocenti', 165, 'São Paulo', 'São Paulo', 'Brasil', 04538000);
    

UPDATE cliente SET 
	id_email = 1, 
    id_endereco = 1,
    id_telefone = 1
WHERE cpf = 98765432101;

UPDATE cliente SET 
	id_email = 2, 
    id_endereco = 2,
    id_telefone = 2
WHERE cpf = 24365787912;

UPDATE fornecedor SET 
	id_email = 3, 
    id_endereco = 3,
    id_telefone = 3
WHERE cnpj = 32797397000180;

UPDATE fornecedor SET 
	id_email = 4, 
    id_endereco = 4,
    id_telefone = 4
WHERE cnpj = 54374678000123;

UPDATE produto SET 
	cnpj = 32797397000180
WHERE id_produto = 1;

UPDATE produto SET 
	cnpj = 54374678000123
WHERE id_produto = 2;

UPDATE produto SET 
	cnpj = 54374678000123
WHERE id_produto = 3;

UPDATE produto SET 
	cnpj = 54374678000123
WHERE id_produto = 4;

insert into pedido (cpf, id_produto, quantidade, preco) 
	values (98765432101, 1, 2, 338.50);
    
insert into pedido (cpf, id_produto, quantidade, preco) 
	values (24365787912, 3, 4, 209.96);
    
UPDATE pedido set preco_total = 338.50 WHERE id_pedido = 1;
UPDATE pedido set preco_total = 209.96 WHERE id_pedido = 2;
UPDATE pedido set preco = 169.25 WHERE id_pedido = 1;
UPDATE pedido set preco = 52.49 WHERE id_pedido = 2;

INSERT into email (email)
	values ('contato@vasp.com.br');
INSERT into telefone (telefone)
	values (1144443322);
INSERT into endereco(logradouro, numero, cidade, estado, pais, cep)
	VALUES ('Av. São José', 3332, 'São Paulo', 'São Paulo', 'Brasil', 03321070);
INSERT INTO fornecedor (cnpj, id_email, id_endereco, id_telefone, nome)
	VALUES (54321236000127, 5, 5, 5, 'Vasp Logística LTDA');

INSERT into logistica (cnpj, id_pedido, cpf)
	VALUES (54321236000127, 1, 98765432101);
INSERT into logistica (cnpj, id_pedido, cpf)
	VALUES (54321236000127, 2, 24365787912);

UPDATE cliente SET 
	id_pedido = 1,
    id_rastreio = 1
WHERE cpf = 98765432101;
UPDATE cliente SET 
	id_pedido = 2,
    id_rastreio = 2
WHERE cpf = 24365787912;

SELECT * from cliente;
SELECT * from email;
SELECT * from endereco;
SELECT * from fornecedor;
SELECT * from logistica;
SELECT * from pedido;
SELECT * from produto;
SELECT * from telefone;