<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
//$guid=($_GET['guid']);
$stmt = $db->prepare(
    'SELECT *
    FROM MemberCertificate mc, Member m, Certificate c
    WHERE mc.isExpired="Expired"
    and m.memberId=mc.memberId
    and mc.certId = c.certId'
  /*  and m.memberId=mc.memberId
    and mc.certId = c.certId*/
  );
  $stmt->execute();



$report = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($report, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
