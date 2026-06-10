-- DROP DATABASE bolaocopa26;

CREATE DATABASE bolaocopa26;

USE bolaocopa26;

DROP TABLE IF EXISTS usuario;
CREATE TABLE IF NOT EXISTS usuario(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    pontos INT UNSIGNED DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS selecao;
CREATE TABLE IF NOT EXISTS selecao(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    bandeira_url VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS grupo;
CREATE TABLE IF NOT EXISTS grupo(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome CHAR(1) NOT NULL
);

DROP TABLE IF EXISTS grupo_selecao;
CREATE TABLE IF NOT EXISTS grupo_selecao(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    grupo INT UNSIGNED NOT NULL,
    selecao INT UNSIGNED NOT NULL,
    FOREIGN KEY (grupo) REFERENCES grupo(id),
    FOREIGN KEY (selecao) REFERENCES selecao(id)
);

DROP TABLE IF EXISTS jogo;
CREATE TABLE IF NOT EXISTS jogo(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    selecao1 INT UNSIGNED NOT NULL,
    selecao2 INT UNSIGNED NOT NULL,
    fase ENUM("grupos", "16 avos", "oitavas", "quartas", "semifinal", "final") NOT NULL,
    data DATETIME NOT NULL,
    selecao1_gols INT UNSIGNED NOT NULL DEFAULT 0,
    selecao2_gols INT UNSIGNED NOT NULL DEFAULT 0,
    CHECK (selecao1 <> selecao2),
    FOREIGN KEY (selecao1) REFERENCES selecao(id),
    FOREIGN KEY (selecao2) REFERENCES selecao(id)
);

DROP TABLE IF EXISTS bolao;
CREATE TABLE IF NOT EXISTS bolao(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario INT UNSIGNED NOT NULL,
    jogo INT UNSIGNED NOT NULL,
    palpite1 INT UNSIGNED NOT NULL DEFAULT 0,
    palpite2 INT UNSIGNED NOT NULL DEFAULT 0,
    pontuacao INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario, jogo),
    FOREIGN KEY (usuario) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (jogo) REFERENCES jogo(id) ON DELETE CASCADE
);

INSERT INTO selecao(nome, bandeira_url) VALUES 
("África do Sul", "https://api.fifa.com/api/v3/picture/flags-sq-5/RSA"),
("Alemanha", "https://api.fifa.com/api/v3/picture/flags-sq-5/GER"),
("Arábia Saudita", "https://api.fifa.com/api/v3/picture/flags-sq-5/KSA"),
("Argélia", "https://api.fifa.com/api/v3/picture/flags-sq-5/ALG"),
("Argentina", "https://api.fifa.com/api/v3/picture/flags-sq-5/ARG"),
("Austrália", "https://api.fifa.com/api/v3/picture/flags-sq-5/AUS"),
("Aústria", "https://api.fifa.com/api/v3/picture/flags-sq-5/AUT"),
("Bélgica", "https://api.fifa.com/api/v3/picture/flags-sq-5/BEL"),
("Bósnia e Herzegovina", "https://api.fifa.com/api/v3/picture/flags-sq-5/BIH"),
("Brasil", "https://api.fifa.com/api/v3/picture/flags-sq-5/BRA"),
("Cabo Verde", "https://api.fifa.com/api/v3/picture/flags-sq-5/CPV"),
("Canadá", "https://api.fifa.com/api/v3/picture/flags-sq-5/CAN"),
("Catar", "https://api.fifa.com/api/v3/picture/flags-sq-5/QAT"),
("Colômbia", "https://api.fifa.com/api/v3/picture/flags-sq-5/COL"),
("Costa do Marfim", "https://api.fifa.com/api/v3/picture/flags-sq-5/CIV"),
("Coréia do Sul", "https://api.fifa.com/api/v3/picture/flags-sq-5/KOR"),
("Croácia", "https://api.fifa.com/api/v3/picture/flags-sq-5/CRO"),
("Curaçao", "https://api.fifa.com/api/v3/picture/flags-sq-5/CUW"),
("Egito", "https://api.fifa.com/api/v3/picture/flags-sq-5/EGY"),
("Equador", "https://api.fifa.com/api/v3/picture/flags-sq-5/ECU"),
("Escócia", "https://api.fifa.com/api/v3/picture/flags-sq-5/SCO"),
("Espanha", "https://api.fifa.com/api/v3/picture/flags-sq-5/ESP"),
("Estados Unidos", "https://api.fifa.com/api/v3/picture/flags-sq-5/USA"),
("França", "https://api.fifa.com/api/v3/picture/flags-sq-5/FRA"),
("Gana", "https://api.fifa.com/api/v3/picture/flags-sq-5/GHA"),
("Haiti", "https://api.fifa.com/api/v3/picture/flags-sq-5/HAI"),
("Holanda", "https://api.fifa.com/api/v3/picture/flags-sq-5/NED"),
("Inglaterra", "https://api.fifa.com/api/v3/picture/flags-sq-5/ENG"),
("Iraque", "https://api.fifa.com/api/v3/picture/flags-sq-5/IRQ"),
("Irã", "https://api.fifa.com/api/v3/picture/flags-sq-5/IRN"),
("Japão", "https://api.fifa.com/api/v3/picture/flags-sq-5/JPN"),
("Jordânia", "https://api.fifa.com/api/v3/picture/flags-sq-5/JOR"),
("Marrocos", "https://api.fifa.com/api/v3/picture/flags-sq-5/MAR"),
("México", "https://api.fifa.com/api/v3/picture/flags-sq-5/MEX"),
("Noruega", "https://api.fifa.com/api/v3/picture/flags-sq-5/NOR"),
("Nova Zelândia", "https://api.fifa.com/api/v3/picture/flags-sq-5/NZL"),
("Panamá", "https://api.fifa.com/api/v3/picture/flags-sq-5/PAN"),
("Paraguai", "https://api.fifa.com/api/v3/picture/flags-sq-5/PAR"),
("Portugal", "https://api.fifa.com/api/v3/picture/flags-sq-5/POR"),
("República Democrática do Congo", "https://api.fifa.com/api/v3/picture/flags-sq-5/COD"),
("Senegal", "https://api.fifa.com/api/v3/picture/flags-sq-5/SEN"),
("Suécia", "https://api.fifa.com/api/v3/picture/flags-sq-5/SWE"),
("Suíça", "https://api.fifa.com/api/v3/picture/flags-sq-5/SUI"),
("Tchéquia", "https://api.fifa.com/api/v3/picture/flags-sq-5/CZE"),
("Tunísia", "https://api.fifa.com/api/v3/picture/flags-sq-5/TUN"),
("Turquia", "https://api.fifa.com/api/v3/picture/flags-sq-5/TUR"),
("Uruguai", "https://api.fifa.com/api/v3/picture/flags-sq-5/URU"),
("Uzbesquistão", "https://api.fifa.com/api/v3/picture/flags-sq-5/UZB");

INSERT INTO grupo(nome) VALUES 
("A"),("B"),("C"),("D"),("E"),("F"),
("G"),("H"),("I"),("J"),("K"),("L");

INSERT INTO grupo_selecao(grupo, selecao) VALUES
(1, 1),(1, 16),(1, 34),(1, 44),
(2, 9),(2, 12),(2, 13),(2, 43),
(3, 10),(3, 21),(3, 26),(3, 33),
(4, 6),(4, 23),(4, 38),(4, 46),
(5, 2),(5, 15),(5, 18),(5, 20),
(6, 27),(6, 31),(6, 42),(6, 45),
(7, 8),(7, 19),(7, 30),(7, 36),
(8, 3),(8, 11),(8, 22),(8, 47),
(9, 24),(9, 29),(9, 35),(9, 41),
(10, 4),(10, 5),(10, 7),(10, 32),
(11, 14),(11, 39),(11, 40),(11, 48),
(12, 17),(12, 25),(12, 28),(12, 37);

SELECT grupo.nome as grupo, selecao.nome as selecao 
FROM grupo_selecao 
INNER JOIN grupo ON grupo.id = grupo_selecao.grupo
INNER JOIN selecao ON selecao.id = grupo_selecao.selecao
GROUP BY grupo.nome, selecao.nome ORDER BY grupo.nome ASC;