INSERT INTO EMPRESAS
  (nome, cnpj)
VALUES
  ('Bradesco', 9795958948484),
  ('Vale', 584394839393),
  ('Cielo', 05757483788)

/* Comando responsável por descrever a estrutura de uma tabela */
  -- desc empresas 

/* Associando uma empresa a uma cidade e dizendo se a empresa numa cidade é a sede */
  INSERT INTO EMPRESAS_CIDADES
   (empresa_id, cidade_id, sede)
VALUES
   (1, 1, 1),
   (1, 2, 0),
   (2, 1, 0),
   (2, 2, 1)

