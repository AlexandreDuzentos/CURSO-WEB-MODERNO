INSERT INTO CIDADES (nome, area, estado_id)
VALUES ("Campinas", 795, 1103);

INSERT INTO CIDADES (nome, area, estado_id)
VALUES("Niterói", 133.9, 1097);

INSERT INTO CIDADES (nome, area, estado_id)
VALUES('Caruaru', 920.6, (select id from estado where sigla = "PE"));

INSERT INTO CIDADES(nome, area, estado_id)
VALUES("Juazeiro do Norte", 248.2, (select id from estado where sigla = "CE"));

select * from cidades


