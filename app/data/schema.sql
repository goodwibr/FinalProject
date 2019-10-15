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

INSERT INTO Member (memberId, firstName, lastName, address, email, phoneNum, dob, sexAtBirth, radioNumber, isActive, departmentPosition, startDate) VALUES
("6573-435-3776", "Kathryn", "Pryde", "1123 Xavier School Dr Watkinsville, GA 30677",  "pryde@ocfr.com", "707-555-1234", "04/07/1983","female","A-1","1","Chief","05/01/2012"),
("1833-198-4498", "Piotr", "Rasputin", "A31 Mother Russia Rd Watkinsville, GA 30678",  "rasputin@ocfr.com", "707-555-4378", "04/07/1983","male","A-2","1","EMT","06/01/2013"),
("9845-878-5643", "Warren", "Worthington", "1140 Expriement Station Rd Watkinsville, GA 30677",  "worthington@ocfr.com", "707-555-3371", "04/07/1983","male","A-3","0","Firefighter I","06/01/2012"),
("9080-324-6778", "Karen", "Smith", "1288 Maint St, GA 30678",  "smith@ocfr.com", "707-555-2991", "04/07/1983","female","A-4","1","Firefighter II","08/01/2013");

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
