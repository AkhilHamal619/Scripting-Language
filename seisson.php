<?php

session_start();

echo "<h2>Name: Akhil Hamal</h2>";


// ==========================================
// CREATE SESSION
// ==========================================

$_SESSION["username"] = "Akhil Hamal";
$_SESSION["course"] = "BCA";
$_SESSION["semester"] = "4th";

echo "<h3>Session Created</h3>";


// ==========================================
// ACCESS SESSION
// ==========================================

echo "Username: " . $_SESSION["username"] . "<br>";
echo "Course: " . $_SESSION["course"] . "<br>";
echo "Semester: " . $_SESSION["semester"] . "<br>";


// ==========================================
// CHECK SESSION
// ==========================================

if (isset($_SESSION["username"])) {

    echo "<br>Session is active.";

} else {

    echo "<br>Session does not exist.";

}

?>