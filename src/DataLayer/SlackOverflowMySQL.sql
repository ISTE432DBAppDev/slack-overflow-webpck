DROP DATABASE IF EXISTS slackoverflow;
CREATE DATABASE slackoverflow;
USE slackoverflow;

--
--  Accounts Table Structure
--
CREATE TABLE `accounts` (
  `accountID` INT(11)     NOT NULL AUTO_INCREMENT,
  `username`  VARCHAR(45) NOT NULL UNIQUE,
  `password`  VARCHAR(45) NULL,
  PRIMARY KEY (`accountID`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = latin1;


CREATE TABLE `Tips` (
  `accountID`   INT(11)      NOT NULL,
  `language`    ENUM,
  `description` VARCHAR(255),
  `rating`      INT UNSIGNED NOT NULL,
  FOREIGN KEY (`accountID`) REFERENCES Accounts (accountID)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = latin1;

CREATE TABLE `Posts` (
  `postID`       INT(11) NOT NULL AUTO_INCREMENT,
  `language`     VARCHAR(45),
  `title`        VARCHAR(45),
  `answer`       VARCHAR(255),
  `date_created` DATETIME,
  PRIMARY KEY (`postID`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = latin1;


CREATE TABLE `UserRatings` (
  'accountID'     INT(11)          NOT NULL
  `TipID` INT (11) NOT NULL,
  `username`      VARCHAR(45),
  `postID`        INT(11)          NOT NULL,
  `rating;_score` TINYINT UNSIGNED NOT NULL,
  -- CONSTRAINT chk_rating CHECK (rating_score >= 0 AND rating_score  <= 5
),
  CONSTRAINT FK_postID
  FOREIGN KEY (`postID`) REFERENCES Posts (postID)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = latin1;
