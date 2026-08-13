<?php

echo "<h2>Name: Akhil Hamal</h2>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];

    echo "<h3>Form Submission Event</h3>";
    echo "Hello, " . htmlspecialchars($name);
}

?>

<form method="post">

    Name:
    <input type="text" name="name">

    <input type="submit" value="Submit">

</form>