<?php

// ==========================================
// ERRORS IN PHP
// ==========================================

echo "<h2>Name: Akhil Hamal</h2>";


// ==========================================
// 1. PARSE / SYNTAX ERROR
// ==========================================

echo "<h3>1. Parse / Syntax Error</h3>";

echo "Example: Missing semicolon<br>";

// Example:
// echo "Hello"


// ==========================================
// 2. FATAL ERROR
// ==========================================

echo "<h3>2. Fatal Error</h3>";

echo "Example: Calling an undefined function<br>";

// Example:
// unknownFunction();


// ==========================================
// 3. WARNING
// ==========================================

echo "<h3>3. Warning</h3>";

echo "Example: Opening a file that does not exist<br>";

$file = fopen("abc.txt", "r");

if ($file == false) {
    echo "File could not be opened.<br>";
}


// ==========================================
// 4. NOTICE
// ==========================================

echo "<h3>4. Notice</h3>";

echo "Example: Using an undefined variable<br>";

$name = "Akhil";

if (isset($name)) {
    echo "Name: $name<br>";
}


// ==========================================
// 5. DEPRECATED ERROR
// ==========================================

echo "<h3>5. Deprecated Error</h3>";

echo "Deprecated features are features that should no longer be used.<br>";

?>