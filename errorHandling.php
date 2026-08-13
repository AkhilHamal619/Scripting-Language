<?php

// ==========================================
// ERROR HANDLING IN PHP
// ==========================================

echo "<h2>Name: Akhil Hamal</h2>";


// ==========================================
// 1. ERROR REPORTING
// ==========================================

echo "<h3>1. Error Reporting</h3>";

error_reporting(E_ALL);
ini_set("display_errors", 1);

echo "Error reporting is enabled.<br>";


// ==========================================
// 2. CUSTOM ERROR HANDLER
// ==========================================

echo "<h3>2. Custom Error Handler</h3>";

function myErrorHandler($errorNumber, $errorMessage) {

    echo "Error Number: $errorNumber<br>";
    echo "Error Message: $errorMessage<br>";
}

set_error_handler("myErrorHandler");


// Generate a user-level warning
trigger_error("This is a custom warning.", E_USER_WARNING);


// ==========================================
// 3. DIE() / EXIT()
// ==========================================

echo "<h3>3. die() / exit()</h3>";

$file = fopen("student.txt", "r");

if (!$file) {
    echo "Unable to open file.<br>";
} else {
    echo "File opened successfully.<br>";
    fclose($file);
}


// ==========================================
// 4. TRY...CATCH
// ==========================================

echo "<h3>4. Try...Catch</h3>";

try {

    $number = 10;
    $divisor = 0;

    if ($divisor == 0) {
        throw new Exception("Cannot divide by zero.");
    }

    echo $number / $divisor;

} catch (Exception $e) {

    echo "Error: " . $e->getMessage();
}

?>