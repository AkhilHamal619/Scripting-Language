<?php

// ==========================================
// PHP OPERATORS
// ==========================================

// Name
echo "Name: Akhil Hamal<br><br>";

// Variables
$a = 10;
$b = 3;


// 1. ARITHMETIC OPERATORS
echo "----- Arithmetic Operators -----<br>";

echo "Addition: " . ($a + $b) . "<br>";
echo "Subtraction: " . ($a - $b) . "<br>";
echo "Multiplication: " . ($a * $b) . "<br>";
echo "Division: " . ($a / $b) . "<br>";
echo "Remainder: " . ($a % $b) . "<br>";
echo "Power: " . ($a ** $b) . "<br><br>";


// 2. ASSIGNMENT OPERATORS
echo "----- Assignment Operators -----<br>";

$x = 10;

echo "Initial value: $x<br>";

$x += 5;
echo "After += 5: $x<br>";

$x -= 3;
echo "After -= 3: $x<br>";

$x *= 2;
echo "After *= 2: $x<br>";

$x /= 4;
echo "After /= 4: $x<br>";

$x %= 3;
echo "After %= 3: $x<br><br>";


// 3. COMPARISON OPERATORS
echo "----- Comparison Operators -----<br>";

echo "10 == 10: ";
var_dump(10 == 10);
echo "<br>";

echo "10 === 10: ";
var_dump(10 === 10);
echo "<br>";

echo "10 != 5: ";
var_dump(10 != 5);
echo "<br>";

echo "10 > 5: ";
var_dump(10 > 5);
echo "<br>";

echo "10 < 5: ";
var_dump(10 < 5);
echo "<br>";

echo "10 >= 10: ";
var_dump(10 >= 10);
echo "<br>";

echo "10 <= 5: ";
var_dump(10 <= 5);
echo "<br><br>";


// 4. LOGICAL OPERATORS
echo "----- Logical Operators -----<br>";

$age = 20;
$hasID = true;

echo "AND (&&): ";
var_dump($age >= 18 && $hasID == true);
echo "<br>";

echo "OR (||): ";
var_dump($age >= 18 || $hasID == false);
echo "<br>";

echo "NOT (!): ";
var_dump(!$hasID);
echo "<br><br>";


// 5. INCREMENT AND DECREMENT
echo "----- Increment and Decrement -----<br>";

$count = 5;

echo "Initial count: $count<br>";

$count++;
echo "After ++: $count<br>";

$count--;
echo "After --: $count<br><br>";


// 6. STRING OPERATORS
echo "----- String Operators -----<br>";

$firstName = "Akhil";
$lastName = "Hamal";

$fullName = $firstName . " " . $lastName;

echo "Full Name: $fullName<br>";

$fullName .= " - Student";

echo "After .= : $fullName<br><br>";


// 7. TERNARY OPERATOR
echo "----- Ternary Operator -----<br>";

$marks = 75;

$result = ($marks >= 40) ? "Pass" : "Fail";

echo "Marks: $marks<br>";
echo "Result: $result<br>";

?>