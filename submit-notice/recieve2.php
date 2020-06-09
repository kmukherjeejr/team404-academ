<?php

$updatedData = $_POST['arb'];
// please validate the data you are expecting for security
file_put_contents('jsonNotice.json', $updatedData);
//return the url to the saved file

?>