CREATE TABLE IF NOT EXISTS EMPRESAS (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED,
    primary key(id),
    unique key(cnpj)
)

-- cidades_empresas
CREATE TABLE IF NOT EXISTS EMPRESAS_CIDADES (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL, -- esse campo indicará se uma empresa numa cidade será a sede da empresa ou não
    PRIMARY KEY(empresa_id, cidade_id)
)
