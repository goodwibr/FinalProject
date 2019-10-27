<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query

$stmt = $db->prepare(
      'INSERT INTO Certificate
        (certName, certAgency, certExpirationPeriod,certId)
      VALUES (?,?,?,?)');
  $guid = Uuid::uuid4()->toString();

$stmt->execute([
  $_POST['certName'],
  $_POST['certAgency'],
  $_POST['certExpirationPeriod'],
  $guid
]);


//echo $guid;
// Step 4: Output
header('HTTP/1.1 303 See Other');
//header('Location: ../memberrecords/')
//header('Location: ../memberrecords/?guid='.$_POST['memberId'];
