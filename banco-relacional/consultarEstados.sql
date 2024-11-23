select * from estado;

/* Usando alias(nomeDeEstado) para substituir o nome original de uma coluna */
select nome as nomeDeEstado, sigla from estado;

select nome as "Nome de Estado", sigla from estado;

/* Aplicando a claúsula where para aplicar filtros na consulta */
select sigla, nome as "Nome de Estado" from estado
WHERE regiao = "Sul"

/*
 Aplicando o order by para ordenar os resultados por coluna de forma
 ascendente
*/
select nome, regiao, populacao from estado
WHERE populacao >= 10
order by populacao asc

/*
 Aplicando o order by para ordenar os resultados por coluna de forma
 descendente
*/
select nome, regiao, populacao from estado
WHERE populacao >= 10
order by populacao desc