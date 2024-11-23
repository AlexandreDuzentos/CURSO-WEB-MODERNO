/*
 Normalmente o group by é usado com funções de agregação, como sum,
 avg e outras, o group by nos permite agregar resultados por grupo.
 */
SELECT regiao as "Região", sum(populacao) as Total
FROM estado
GROUP BY regiao
order by Total desc

/*
 Usando apenas a função de agregação, será feita uma soma de todas
 as populações, mas com o group by será feita uma soma das populações
 por grupo.
*/
select sum(populacao) as Total
from estado