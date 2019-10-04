CREATE DATABASE team9_ocfr;

USE team9_ocfr;

CREATE TABLE Member (
    memberId VARCHAR(64) PRIMARY KEY,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    address VARCHAR(64),
    email VARCHAR(64),
    phoneNum VARCHAR(64),
    dob DATE DEFAULT NULL,
    sexAtBirth CHAR(1) DEFAULT '',
    radioNumber VARCHAR(64),
    isActive VARCHAR(64),
    departmentPosition VARCHAR(64),
    startDate DATE
);

CREATE TABLE Station (
    stationNumber VARCHAR(64) PRIMARY KEY,
    stationAddress VARCHAR(64),
    stationPhoneNum VARCHAR(64)
);

CREATE TABLE Certificate (
    certId VARCHAR(64) PRIMARY KEY,
    certName VARCHAR(64),
    certAgency VARCHAR(64),
    certExpirationPeriod INT(64)
);

CREATE TABLE MemberCertificate (
    certId VARCHAR(64),
    memberId VARCHAR(64),
    lastName VARCHAR(64),
    certActivationDate DATE,
    certExpirationDate DATE,
    isExpired VARCHAR(64),
    FOREIGN KEY (certId) REFERENCES Certificate (certId),
    FOREIGN KEY (memberId) REFERENCES Member (memberId)
);
