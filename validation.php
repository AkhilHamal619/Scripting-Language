<?php

echo "<h2>Name: Akhil Hamal</h2>";

$nameErr = "";
$emailErr = "";

$name = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Name Validation
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = $_POST["name"];
    }

    // Email Validation
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {

        $email = $_POST["email"];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid Email Format";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Form Validation</title>
</head>
<body>

<form method="post">

    Name:
    <input type="text" name="name">
    <span style="color:red"><?php echo $nameErr; ?></span>
    <br><br>

    Email:
    <input type="text" name="email">
    <span style="color:red"><?php echo $emailErr; ?></span>
    <br><br>

    <input type="submit" value="Submit">

</form>

<?php

if ($nameErr == "" && $emailErr == "" &&
    !empty($name) && !empty($email)) {

    echo "<h3>Form Submitted Successfully</h3>";

    echo "Name: $name <br>";
    echo "Email: $email";
}

?>

</body>
</html>