<?php
//use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query

//if(isset($_GET['guid'])) {
//$guid=([$_GET['guid']]);
$stmt = $db->prepare(
  'UPDATE Member
  SET firstName=?, lastName=?, address=?, email=?, phoneNum=?, dob=?, radioNumber=?, departmentPosition=?, startDate=?, isActive=?
  where memberId=?');

//}else {
    /*$stmt = $db->prepare(
        'INSERT INTO Member
          (firstName, lastName, address, email, phoneNum, dob, radioNumber, departmentPosition, startDate, memberId)
        VALUES (?,?,?,?,?,?,?,?,?,?)');
    //$guid = Uuid::uuid4()->toString();*/
  //}
$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['address'],
  $_POST['email'],
  $_POST['phoneNum'],
  $_POST['dob'],
  $_POST['radioNumber'],
  $_POST['departmentPosition'],
  $_POST['startDate'],
  $_POST['isActive'],
  $_POST['memberId']
]);


//echo $guid;
// Step 4: Output
header('HTTP/1.1 303 See Other');
//header('Location: ../memberrecords/')
//header('Location: ../memberrecords/?guid='.$_POST['memberId'];
