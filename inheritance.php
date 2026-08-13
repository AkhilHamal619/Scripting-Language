<?php

echo "<h2>Name: Akhil Hamal</h2>";


// Parent Class

class Student {

    public $name;

    public function displayName() {

        echo "Student Name: " . $this->name . "<br>";

    }
}


// Child Class

class BCAStudent extends Student {

    public $course;

    public function displayCourse() {

        echo "Course: " . $this->course;

    }
}


// Create Child Object

$student = new BCAStudent();

$student->name = "Akhil Hamal";
$student->course = "BCA";


// Calling inherited method

$student->displayName();

// Calling child method

$student->displayCourse();

?>