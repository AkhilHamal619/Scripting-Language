<?php

// ==========================================
// ARRAYS IN PHP
// ==========================================

echo "Name: Akhil Hamal<br><br>";


// ==========================================
// 1. INDEXED ARRAY
// ==========================================

echo "----- Indexed Array -----<br>";

$fruits = array("Apple", "Mango", "Banana", "Orange");

echo "First fruit: " . $fruits[0] . "<br>";
echo "Second fruit: " . $fruits[1] . "<br>";
echo "Third fruit: " . $fruits[2] . "<br>";
echo "Fourth fruit: " . $fruits[3] . "<br>";

echo "<br>";


// Using foreach

echo "All fruits:<br>";

foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}

echo "<br>";


// ==========================================
// 2. ASSOCIATIVE ARRAY
// ==========================================

echo "----- Associative Array -----<br>";

$student = array(
    "name" => "Akhil Hamal",
    "age" => 21,
    "course" => "BCA",
    "marks" => 75
);

echo "Name: " . $student["name"] . "<br>";
echo "Age: " . $student["age"] . "<br>";
echo "Course: " . $student["course"] . "<br>";
echo "Marks: " . $student["marks"] . "<br>";

echo "<br>";


// Using foreach

echo "Student Details:<br>";

foreach ($student as $key => $value) {
    echo "$key : $value<br>";
}

echo "<br>";


// ==========================================
// 3. MULTIDIMENSIONAL ARRAY
// ==========================================

echo "----- Multidimensional Array -----<br>";

$students = array(

    array(
        "name" => "Akhil",
        "age" => 21,
        "marks" => 75
    ),

    array(
        "name" => "Ram",
        "age" => 20,
        "marks" => 80
    ),

    array(
        "name" => "Sita",
        "age" => 21,
        "marks" => 85
    )

);

echo "First Student:<br>";
echo "Name: " . $students[0]["name"] . "<br>";
echo "Age: " . $students[0]["age"] . "<br>";
echo "Marks: " . $students[0]["marks"] . "<br><br>";


// Display all students

echo "All Students:<br>";

foreach ($students as $student) {

    echo "Name: " . $student["name"] . "<br>";
    echo "Age: " . $student["age"] . "<br>";
    echo "Marks: " . $student["marks"] . "<br>";
    echo "----------------<br>";
}

?>