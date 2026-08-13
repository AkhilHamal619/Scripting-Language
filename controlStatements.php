<?php

// ==========================================
// CONTROL STATEMENTS IN PHP
// ==========================================

echo "Name: Akhil Hamal<br><br>";


// ==========================================
// 1. IF STATEMENT
// ==========================================

echo "----- IF Statement -----<br>";

$age = 20;

if ($age >= 18) {
    echo "You are an adult.<br>";
}

echo "<br>";


// ==========================================
// 2. IF...ELSE STATEMENT
// ==========================================

echo "----- IF...ELSE Statement -----<br>";

$marks = 75;

if ($marks >= 40) {
    echo "Result: Pass<br>";
} else {
    echo "Result: Fail<br>";
}

echo "<br>";


// ==========================================
// 3. IF...ELSEIF...ELSE STATEMENT
// ==========================================

echo "----- IF...ELSEIF...ELSE Statement -----<br>";

$marks = 75;

if ($marks >= 80) {
    echo "Grade: A+<br>";
} elseif ($marks >= 70) {
    echo "Grade: A<br>";
} elseif ($marks >= 60) {
    echo "Grade: B<br>";
} elseif ($marks >= 40) {
    echo "Grade: C<br>";
} else {
    echo "Grade: Fail<br>";
}

echo "<br>";


// ==========================================
// 4. SWITCH STATEMENT
// ==========================================

echo "----- SWITCH Statement -----<br>";

$day = 3;

switch ($day) {
    case 1:
        echo "Sunday<br>";
        break;

    case 2:
        echo "Monday<br>";
        break;

    case 3:
        echo "Tuesday<br>";
        break;

    case 4:
        echo "Wednesday<br>";
        break;

    case 5:
        echo "Thursday<br>";
        break;

    case 6:
        echo "Friday<br>";
        break;

    case 7:
        echo "Saturday<br>";
        break;

    default:
        echo "Invalid day<br>";
}

echo "<br>";


// ==========================================
// 5. FOR LOOP
// ==========================================

echo "----- FOR Loop -----<br>";

for ($i = 1; $i <= 5; $i++) {
    echo "Number: $i<br>";
}

echo "<br>";


// ==========================================
// 6. WHILE LOOP
// ==========================================

echo "----- WHILE Loop -----<br>";

$i = 1;

while ($i <= 5) {
    echo "Number: $i<br>";
    $i++;
}

echo "<br>";


// ==========================================
// 7. DO...WHILE LOOP
// ==========================================

echo "----- DO...WHILE Loop -----<br>";

$i = 1;

do {
    echo "Number: $i<br>";
    $i++;
} while ($i <= 5);

echo "<br>";


// ==========================================
// 8. FOREACH LOOP
// ==========================================

echo "----- FOREACH Loop -----<br>";

$fruits = array("Apple", "Mango", "Banana", "Orange");

foreach ($fruits as $fruit) {
    echo "$fruit<br>";
}

echo "<br>";


// ==========================================
// 9. BREAK STATEMENT
// ==========================================

echo "----- BREAK Statement -----<br>";

for ($i = 1; $i <= 10; $i++) {

    if ($i == 6) {
        break;
    }

    echo "$i<br>";
}

echo "<br>";


// ==========================================
// 10. CONTINUE STATEMENT
// ==========================================

echo "----- CONTINUE Statement -----<br>";

for ($i = 1; $i <= 5; $i++) {

    if ($i == 3) {
        continue;
    }

    echo "$i<br>";
}

?>