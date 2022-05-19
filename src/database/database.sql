USE testedb

CREATE TABLE  developers (
	ID VARCHAR(255) NOT NULL,
    NAME VARCHAR(255) NOT NULL,
    SEX CHAR(1) NOT NULL,
    AGE TINYINT NOT NULL,
    HOBBY VARCHAR(255) NOT NULL,
    BIRTHDATE DATE NOT NULL,
    CREATEDAT DATE,
    UPDATEDAT DATE,
    primary key (ID)
)

drop table developers

select * from developers