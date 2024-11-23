insert into estado (id, nome, sigla, regiao, populacao)
VALUES
(1000, "Novo", "NV", "Sul", 2.54)

SELECT * FROM estado;

/*
O auto increment usa sempre o último id inserido no banco de dados para
incrementar e gerar o próximo id
*/
insert into estado (nome, sigla, regiao, populacao)
VALUES
("Mais Novo", "MN", "Norte", 2.51)

select * from estado