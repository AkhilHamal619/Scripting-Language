<?php

echo "<h2>Name: Akhil Hamal</h2>";

try {

    $number = 10;

    if ($number == 10) {
        throw new Exception("Something went wrong!");
    }

    echo "Program executed successfully.";

}
catch (Exception $e) {

    echo "Exception: " . $e->getMessage();

}

?>