<?php

echo "<h2>Name: Akhil Hamal</h2>";


// Creating a Class

class Student {

    // Properties
    public $name;
    public $course;

    // Method
    public function displayInfo() {

        echo "Name: " . $this->name . "<br>";
        echo "Course: " . $this->course . "<br>";

    }
}


// Creating an Object

$student = new Student();


// Assigning values

$student->name = "Akhil Hamal";
$student->course = "BCA";


// Calling method

$student->displayInfo();

?>