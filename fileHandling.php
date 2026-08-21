<?php

// ==========================================
// FILE HANDLING IN PHP
// ==========================================

echo "<h2>Name: Akhil Hamal</h2>";


// ==========================================
// 1. CREATE AND WRITE TO A FILE
// ==========================================

echo "----- Writing to File -----<br>";

$file = fopen("student.txt", "w");

fwrite($file, "Name: Akhil Hamal\n");
fwrite($file, "Course: BCA\n");
fwrite($file, "Semester: 4th\n");

fclose($file);

echo "Data written successfully.<br><br>";


// ==========================================
// 2. READ FROM A FILE
// ==========================================

echo "----- Reading File -----<br>";

$file = fopen("student.txt", "r");

$content = fread($file, filesize("student.txt"));

fclose($file);

echo nl2br($content);

echo "<br>";


// ==========================================
// 3. APPEND DATA TO A FILE
// ==========================================

echo "----- Appending Data -----<br>";

$file = fopen("student.txt", "a");

fwrite($file, "Subject: Scripting Language\n");

fclose($file);

echo "New data added successfully.<br><br>";


// ==========================================
// 4. READ FILE USING file_get_contents()
// ==========================================

echo "----- File Contents -----<br>";

$content = file_get_contents("student.txt");

echo nl2br($content);

echo "<br>";


// ==========================================
// 5. DELETE A FILE
// ==========================================

// unlink("student.txt");

// echo "File deleted successfully.";

?>