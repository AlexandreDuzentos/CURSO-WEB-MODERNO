/* junção de três tabelas usando a claúsula where */
select e.nome as empresaNome, c.nome as cidadeNome
from empresas as e, empresas_cidades as ec, cidades as c
where e.id = ec.empresa_id and c.id = ec.cidade_id;


/* Junção de três tabelas usando inner join */
select e.nome as NomeDaEmpresa, c.nome as NomeDaCidade
from cidades as c inner join empresas_cidades as ec
on c.id = ec.cidade_id
inner join empresas as e
on e.id = ec.empresa_id;