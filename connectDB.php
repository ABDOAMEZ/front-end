<?php
    $host="localhost";
    $port=3306;
    $socket="";
    $user="root";
    $password="";
    $dbname="megashop";
    
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket);
    if ($con->connect_error) {
        die('Could not connect to the database server: ' . $con->connect_error);
    }
    
    //$con->close();
    $query1 = "SELECT Products.price, Product_Images.image_url, Product_Images.is_primary FROM Products LEFT JOIN Product_Images ON Products.product_id = Product_Images.product_id";
    $query2 = "SELECT Users.username, User_Images.image_url FROM Users LEFT JOIN User_Images ON Users.user_id = User_Images.user_id";
    $query = "SELECT Products.product_id, Products.name, Products.description, Products.price, Product_Images.image_url, Product_Images.is_primary FROM Products LEFT JOIN Product_Images ON Products.product_id = Product_Images.product_id";
if ($stmt = $con->prepare($query1)) {
    $stmt->execute();
    $stmt->bind_result($price, $image_url, $is_primary);
    while ($stmt->fetch()) {
        //printf("%s, %s, %s\n", $price, $image_url, $is_primary);
    }
    $stmt->close();
} else {
    die('Query1 prepare failed: ' . $con->error);
}

if ($stmt = $con->prepare($query2)) {
    $stmt->execute();
    $stmt->bind_result($username, $image_url);
    while ($stmt->fetch()) {
        //printf("%s, %s\n", $username, $image_url);
    }
    $stmt->close();
} else {
    die('Query2 prepare failed: ' . $con->error);
}
    $stmt->close();
}
    
?>