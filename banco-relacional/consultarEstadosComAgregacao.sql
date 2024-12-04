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

/*
   O GROUP BY no SQL é uma cláusula usada para agrupar resultados de uma
   consulta com base em uma ou mais colunas, de modo a realizar operações de
   agregação sobre esses grupos. Ela é comumente usada em conjunto com
   funções agregadas (como SUM, COUNT, AVG, MIN, MAX, etc.) para resumir ou
   calcular informações sobre um conjunto de registros agrupados.

   Objetivo principal:
   A principal função do GROUP BY é agrupar os resultados de uma consulta
   para realizar operações de agregação em dados que compartilham o mesmo
   valor em uma ou mais colunas. Ele permite que você veja informações
   resumidas por grupo de dados.
*/