<?php

$servername ="localhost";
$username = "root";
$password ="";
$database ="signup_page";

$conn = mysqli_connect($servername,$username,$password,$database);

if (!$conn){
    die("sorry failed to connect: ".mysqli_connect_error());
}
$showalert = false;

if($SERVER["REQUEST_METHOD"] === "POST")
{
    $err ="";
    $user_name = $_POST["username"];
    $pass = $_POST["password"];
    $cpassword = $_POST["cpassword"];

    if(($password == $cpassword) && $exists == false){
        $sql = "INSERT INTO signup (user_name, pass, date) VALUES ('$username', '$pass', current_timestamp())";
    }
    $result = mysqli_query($conn,$sql);
    if ($result){
        $showalert = true;
    }
}

if($showalert){
    echo "<script>alert('SignUp successful.');</script>";
}


?>