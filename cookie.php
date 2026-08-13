<?php

echo "<h2>Name: Akhil Hamal</h2>";


// ==========================================
// CREATE COOKIE
// ==========================================

setcookie("username", "Akhil Hamal", time() + 3600);


// ==========================================
// READ COOKIE
// ==========================================

echo "<h3>Cookie Handling</h3>";

if (isset($_COOKIE["username"])) {

    echo "Username: " . $_COOKIE["username"];

} else {

    echo "Cookie has been created.";
}

?>