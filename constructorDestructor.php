<?php

echo "<h2>Name: Akhil Hamal</h2>";

class Student {

    public $name;
    public $course;

    // Constructor
    public function __construct($name, $course) {

        $this->name = $name;
        $this->course = $course;

        echo "Object created.<br><br>";
    }

    // Display method
    public function display() {

        echo "Student Name: " . $this->name . "<br>";
        echo "Course: " . $this->course . "<br><br>";
    }

    // Destructor
    public function __destruct() {

        echo "Object destroyed.";
    }
}


// Create object
$student = new Student("Akhil Hamal", "BCA");

// Display information
$student->display();

?>