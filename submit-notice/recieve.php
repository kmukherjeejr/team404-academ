<?php
$updatedData = $_POST['myJSON'];
$data=file_get_contents('jsonN.json');
var_dump($data);
$oldData=array_merge(array($updatedData),array(",\n"),array($data));
// please validate the data you are expecting for security
file_put_contents('jsonN.json', $oldData);
//return the url to the saved file

$data2=file_get_contents('jsonN.json');
$updatedData2 = $data2;
$oldData2=array_merge(array("["),array($updatedData2),array("]"));
// please validate the data you are expecting for security
file_put_contents('jsonNotice.json', $oldData2);
//return the url to the saved file

?>