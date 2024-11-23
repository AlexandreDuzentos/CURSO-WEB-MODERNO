/*
 Aqui estamos diante de uma junção com a claúsula where, uma junção é
 um produto cartesiano + uma restrição de chaves correspondentes(chave primária
 + chave estrangeira).
*/
select e.nome as Estado, c.nome as Cidade
from estado as e, cidades as c
where e.id = c.estado_id

/*
Aqui nós estamos diante de um produto cartesiano, que é um cruzamento de
todos os estados com todas as cidades sem critério nenhum.
*/
select e.nome as Estado, c.nome as Cidade
from estado as e, cidades as c;

/* Aqui estamos diante de uma junção com o inner join */
select e.nome as Estado, c.nome as Cidade
from estado as e
inner join cidades as c
on e.id = c.estado_id
