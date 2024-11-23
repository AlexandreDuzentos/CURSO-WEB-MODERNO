-- Criando a tabela estado
create table estado (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(45) NOT NULL,
    sigla varchar(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE KEY(nome),
    UNIQUE KEY(sigla)
);

-- o Mysql é case insensitive, o que significa que ele não faz distinção
-- entre caracteres maiúsculos e minúsculos.
