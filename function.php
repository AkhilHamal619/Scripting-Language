<?php

// ==========================================
// FUNCTIONS IN PHP
// ==========================================

echo "Name: Akhil Hamal<br><br>";


// ==========================================
// 1. SIMPLE FUNCTION
// ==========================================

echo "----- Simple Function -----<br>";

function welcome() {
    echo "Welcome to PHP Programming!<br>";
}

welcome();

echo "<br>";


// ==========================================
// 2. FUNCTION WITH PARAMETER
// ==========================================

echo "----- Function with Parameter -----<br>";

function greet($name) {
    echo "Hello, $name!<br>";
}

greet("Akhil");
greet("Ram");

echo "<br>";


// ==========================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// ==========================================

echo "----- Multiple Parameters -----<br>";

function addNumbers($a, $b) {
    echo "Sum: " . ($a + $b) . "<br>";
}

addNumbers(10, 20);

echo "<br>";


// ==========================================
// 4. FUNCTION WITH RETURN VALUE
// ==========================================

echo "----- Return Value -----<br>";

function multiply($a, $b) {
    return $a * $b;
}

$result = multiply(5, 4);

echo "Multiplication: $result<br>";

echo "<br>";


// ==========================================
// 5. FUNCTION WITH DEFAULT PARAMETER
// ==========================================

echo "----- Default Parameter -----<br>";

function country($name = "Nepal") {
    echo "Country: $name<br>";
}

country();
country("Australia");

echo "<br>";


// ==========================================
// 6. FUNCTION FOR CHECKING EVEN/ODD
// ==========================================

echo "----- Even or Odd -----<br>";

function checkEvenOdd($number) {

    if ($number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

echo "10 is " . checkEvenOdd(10) . "<br>";
echo "7 is " . checkEvenOdd(7) . "<br>";

echo "<br>";


// ==========================================
// 7. FUNCTION FOR CALCULATING MARKS
// ==========================================

echo "----- Grade Calculator -----<br>";

function calculateGrade($marks) {

    if ($marks >= 80) {
        return "A+";
    } elseif ($marks >= 70) {
        return "A";
    } elseif ($marks >= 60) {
        return "B";
    } elseif ($marks >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

$marks = 75;

echo "Marks: $marks<br>";
echo "Grade: " . calculateGrade($marks);

?>