UPDATE estado
SET nome = "Maranhão"
WHERE sigla = "MA"

SELECT nome FROM estado
WHERE sigla = "MA"

UPDATE estado
SET nome = "Paraná", populacao = 11.32
WHERE sigla = "PR"

SELECT nome, populacao FROM `estado`
WHERE sigla = "PR"