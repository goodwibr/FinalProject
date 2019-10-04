<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Member');
$stmt->execute();
$member = $stmt->fetch();
