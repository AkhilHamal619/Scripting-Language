<?php

echo "<h2>Name: Akhil Hamal</h2>";

class Animal {

    public function sound() {

        echo "Animal makes a sound.<br>";

    }
}


class Dog extends Animal {

    public function sound() {

        echo "Dog says: Bark<br>";

    }
}


class Cat extends Animal {

    public function sound() {

        echo "Cat says: Meow<br>";

    }
}


$dog = new Dog();
$cat = new Cat();

$dog->sound();
$cat->sound();

?>