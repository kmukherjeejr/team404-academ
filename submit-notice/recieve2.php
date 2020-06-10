<?php

$updatedData = $_POST['arb'];
// please validate the data you are expecting for security
file_put_contents('jsonNotice.json', $updatedData);
//return the url to the saved file

?>

<?php
$updatedData = $_POST['arc'];
$oldData=array_merge(array("["),array($updatedData),array("]"));
// please validate the data you are expecting for security
file_put_contents('jsonNotice.json', $oldData);
//return the url to the saved file

?>