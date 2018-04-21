DROP DATABASE IF EXISTS slackoverflow;
CREATE DATABASE slackoverflow;

\c  slackoverflow

DROP TABLE IF EXISTS ACCOUNTS CASCADE;
CREATE TABLE ACCOUNTS (
  accountID INT         NOT NULL,
  username  VARCHAR(45) NOT NULL,
  password  VARCHAR(256) NULL,
  salt  VARCHAR(64) NOT NULL,
  PRIMARY KEY (accountID)
);


DROP TABLE IF EXISTS LANGUAGE;
CREATE TABLE LANGUAGE (
  languageID	INT	NOT NULL,
  language VARCHAR(45),
  PRIMARY KEY (languageID)
);

DROP TABLE IF EXISTS TIPS;
CREATE TABLE TIPS (
  tipsID	INT	NOT NULL,
  accountID   INT NOT NULL REFERENCES ACCOUNTS (accountID),
  languageID INT NOT NULL REFERENCES LANGUAGE (languageID),
  description VARCHAR(255),
  rating      INT NOT NULL,
  PRIMARY KEY (tipsID)
);

DROP TABLE IF EXISTS USERRATINGS;
CREATE TABLE USERRATINGS (
  accountID INT      NOT NULL REFERENCES ACCOUNTS (accountID),
  tipsID     INT      NOT NULL REFERENCES TIPS (tipsID),
  PRIMARY KEY (accountID, tipsID)
);

INSERT INTO public.accounts(
            accountid, username, password, salt)
    VALUES (1, 'bri@gmail.com', '4c5f32a0f26e19b8dbe0d24628f6abb9c82144a881f92726a7bf16025b4b905b', 'e1LNFkbsqhTYUCVeQqUJ8myQP12QdIKbezFS17yztm7CvfjdiP9RD2SoZUgdgwSN'),
    (2, 'kat@gmail.com', '63d533598e6a64ef5d7412177403d683f2d97ce3bd48dc27d9be764700e90611', 'NkXW96mpnH6PvIUFyGp2bqmJVUa4KsuITRXGPOnd0W4BrouQuFlBmcYgKdcm2qGc'),
    (3, 'matt@gmail.com', '3fd6353619c0c1a1c2adac0a9a62653654fb249be16b5a1ba01d350ef0dbbf13', 'XdB5YOA2qHCeUcpgzorgp6elRIo3slPykipMUyEebFQwowQ3bxwfAQ3wIxEJy9KL');

INSERT INTO public.language(
            languageid, language)
    VALUES (1, 'java'),
	(2, 'javascript'),
	(3, 'php');
	
INSERT INTO public.tips(
            tipsid, accountid, languageid, description, rating)
    VALUES 
    (1, 1, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 3),
    (2, 2, 1, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 6),
    (3, 3, 1, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 75),
    (4, 1, 1, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', -34),
    (5, 1, 2, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', 2),
    (6, 2, 2, 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ', 76),
    (7, 3, 2, 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', -4),
    (8, 1, 2, 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut.', 0),
    (9, 1, 3, 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.', 8),
    (10, 2, 3, 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.', -3),
    (11, 3, 3, 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', 34),
    (12, 1, 3, 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', -21),
    (13, 1, 3, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 3);

INSERT INTO public.userratings(
            accountid, tipsid)
    VALUES (1, 1),
    (1, 5),
    (1, 9),
    (2, 2),
    (2, 6),
    (2, 10),
    (3, 1),
    (3, 2);
	