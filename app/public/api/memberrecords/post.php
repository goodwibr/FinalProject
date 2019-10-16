<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query

if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'UPDATE Member
      (memberId, firstName, lastName, address, email, phoneNum, dob, radioNumber, departmentPosition, startDate)
    VALUES (?,?,?,?,?,?,?,?,?,?)'
  );
  $stmt->execute([$_GET['guid']]);

} else {
  $stmt = $db->prepare(
    'INSERT INTO Member
      (memberId, firstName, lastName, address, email, phoneNum, dob, radioNumber, departmentPosition, startDate)
    VALUES (?,?,?,?,?,?,?,?,?,?)'
  );

  $guid = Uuid::uuid4()->toString();


}


/*$stmt = $db->prepare(
  'INSERT INTO Member
    (memberId, firstName, lastName, address, email, phoneNum, dob, radioNumber, departmentPosition, startDate)
  VALUES (?,?,?,?,?,?,?,?,?,?)'
);*/

$guid = Uuid::uuid4()->toString();

$stmt->execute([
//$guid, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['phoneNum'],
  $_POST['dob'],
  $_POST['radioNumber'],
  $_POST['departmentPosition'],
  $_POST['startDate']
]);



// Step 4: Output
header('HTTP/1.1 303 See Other');
//header('Location: ../memberrecords/');
header('Location: ../memberrecords/?guid='.$guid);
