<?php

echo "<h2>Name: Akhil Hamal</h2>";

class Student {

    public $college = "TU";

    protected $course = "BCA";

    private $password = "12345";

    public function display() {

        echo "College: " . $this->college . "<br>";
        echo "Course: " . $this->course . "<br>";
        echo "Password: " . $this->password . "<br>";

    }
}

$student = new Student();

echo "Public property:<br>";
echo $student->college . "<br><br>";

echo "All properties through class method:<br>";
$student->display();

?>