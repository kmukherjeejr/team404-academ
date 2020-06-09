<?php
$updatedData = $_POST['myJSON'];
$data=file_get_contents('jsonN.json');
var_dump($data);
$oldData=array_merge(array($updatedData),array(",\n"),array($data));
// please validate the data you are expecting for security
file_put_contents('jsonN.json', $oldData);
//return the url to the saved file

?>