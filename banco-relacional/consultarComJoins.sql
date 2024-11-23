-- O plugin em uso possui algumas limitações quanto aos joins.

/* inner join */
select * from cidades as c inner join prefeitos as p 
on c.id = p.cidade_id;

/* left join */
select * from cidades as c left join prefeitos as p 
on c.id = p.cidade_id;

/* right join */
select * from cidades as c right join prefeitos as p 
on c.id = p.cidade_id;

/*
 Simulando um full join por meio do operador union, que une os resultados
 de uma consulta.
*/
select * from cidades as c left join prefeitos as p 
on c.id = p.cidade_id
union
select * from cidades as c right join prefeitos as p 
on c.id = p.cidade_id;